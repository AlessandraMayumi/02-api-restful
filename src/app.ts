import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { trasactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(cookie);

app.register(trasactionsRoutes, {
    prefix: 'transactions'
});

export default app;