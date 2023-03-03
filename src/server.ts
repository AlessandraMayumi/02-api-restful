import fastify from 'fastify';
import crypto from 'node:crypto';
import { db } from './database';

const app = fastify();

app.get('/', async () => {
    // const transaction = await db('transactions').insert({
    //     id: crypto.randomUUID(),
    //     title: 'Transacao teste',
    //     amount: 1000
    // });

    const transaction = await db('transactions')
        .select('*');

    return transaction;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running');
});
