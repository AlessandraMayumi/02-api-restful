import crypto from 'node:crypto';
import { db } from './../database';

export async function trasactionsRoutes(app) {
    app.get('/', async () => {
        const transaction = await db('transactions')
            .select('*');
    
        return transaction;
    });
}