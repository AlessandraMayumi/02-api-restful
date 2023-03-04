# 02-api-restful


``` JavaScript
// Install TypeScript
npm i typescript
// Generate tsconfig.json
npx tsc --init
// Convert TypeScript to JavaScript and use node with typescript
npm i -D @types/node
npx tsc src/server.ts
node src/server.js
// Run TypeScript
npm i -D tsx
npx tsx src/server.ts
```

Compare time
``` JavaScript
time node src/server.js
time npx tsx src/server.ts
```

Database
``` JavaScript
// Install knex
nom i knex sqlite3
npm i knex -g
// knexfile.ts
knex init -x ts
// migration
knex migrate:make create_transactions -x ts
knex migrate:latest
knex migrate:rollback
```

Environment Variable 
```
npm i zod
```

## Requisitos da aplicação
### Requisitos Funcionais
[x] O usuário deve poder `criar uma nova transação`;<br>
[x] O usuário deve poder `obter um resumo da sua conta`;<br>
[x] O usuário deve poder `listar todas as transações que já ocorreram`;<br>
[x] O usuário deve poder `visualizar uma transação única`;<br>
### Regras de Negócio
[x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subitrairá;<br>
[] Deve ser possível identificarmos o usuário entre as requisições;<br>
[] O usuário só pode visualizar transações criadas por ele;<br> 
### Requisitos Não Funcionais
