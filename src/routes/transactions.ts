import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { db } from './../database';
import { checkSessionId } from '../middleware/check-session-id';


export async function trasactionsRoutes(app: FastifyInstance) {
    app.addHook('preHandler', async (request, reply) => {
        console.log(`all routes ${request.method}: ${request.url}`);
    });

    app.get('/', { preHandler: [checkSessionId] }, async (request) => {
        const { sessionId } = request.cookies;

        const transactions = await db('transactions')
            .where('session_id', sessionId)
            .select();

        return {
            transactions
        };
    });

    app.get('/:id', { preHandler: [checkSessionId] }, async (request) => {
        const { sessionId } = request.cookies;

        const getTransactionsParamsSchema = z.object({
            id: z.string().uuid(),
        });

        const params = getTransactionsParamsSchema.parse(
            request.params
        );

        const { id } = params;


        const transaction = await db('transactions')
            .where({
                session_id: sessionId,
                id: id
            })
            .first();

        return {
            transaction
        };
    });

    app.get('/summary', { preHandler: [checkSessionId] }, async (request) => {
        const { sessionId } = request.cookies;

        const summary = await db('transactions')
            .where('session_id', sessionId)
            .sum('amount', { as: 'amount' })
            .first();
        return { summary };
    });

    app.post('/', async (request, reply) => {
        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit'])
        });

        const body = createTransactionBodySchema.parse(
            request.body
        );

        const { title, amount, type } = body;

        // Cookie sessionId
        let sessionId = request.cookies.sessionId;

        if (!sessionId) {
            sessionId = randomUUID();
            reply.cookie('sessionId', sessionId, {
                path: '/',
                maxAge: 1000 * 60 * 60 * 24, // 7 days
            });
        }

        await db('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credit' ? amount : amount * -1,
            session_id: sessionId
        });

        return reply.status(201).send();
    });
}