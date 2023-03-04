import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { trasactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(cookie);

app.register(trasactionsRoutes,{
    prefix: 'transactions'
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running');
});
