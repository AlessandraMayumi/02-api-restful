import fastify from 'fastify';
import { trasactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(trasactionsRoutes);

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running');
});
