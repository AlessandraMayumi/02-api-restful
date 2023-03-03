import fastify from 'fastify';
import { db } from './database';

const app = fastify();

app.get('/', async () => {
    const test = await db('sqlite_schema').select('*');
    return test;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running');
});
