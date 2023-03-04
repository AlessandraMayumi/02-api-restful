import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { db } from './../database';


export async function trasactionsRoutes(app: FastifyInstance) {
    app.post('/', async (request, response) => {
        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit'])
        });

        const body = createTransactionBodySchema.parse(
            request.body
        );

        const { title, amount, type } = body;

        await db('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credit' ? amount : amount * -1
        });

        return response.status(201).send();
    });
}