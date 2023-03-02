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
```
time node src/server.js
time npx tsx src/server.ts
```