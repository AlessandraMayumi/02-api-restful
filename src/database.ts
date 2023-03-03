import { knex } from 'knex';

export const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './db/mydb.sqlite'
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: 'db/migrations'
    },
    
});
