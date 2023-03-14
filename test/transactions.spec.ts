import { afterAll, beforeAll, describe, test } from 'vitest';
import supertest from 'supertest';
import app from '../src/app';

describe('Transactions routes', () => {
    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    test('user can create a new transaction', async () => {
        await supertest(app.server)
            .post('/transactions')
            .send({
                title: 'New transaction',
                amount: 5000,
                type: 'credit',
            })
            .expect(201);
    });
});