// Copies the app, its service declaration and the database contract into the
// build output (src/dist, per the service declaration's `dir: "dist"`) that
// Prisma Compute deploys. The app imports its service declaration at run time,
// so both must be siblings in the built tree.
import { cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('src/dist', { recursive: true, force: true });
mkdirSync('src/dist');
cpSync('src/index.js', 'src/dist/index.js');
cpSync('src/service.mjs', 'src/dist/service.mjs');
mkdirSync('src/dist/prisma', { recursive: true });
cpSync('src/prisma/db-contract.mjs', 'src/dist/prisma/db-contract.mjs');
cpSync('src/prisma/contract.json', 'src/dist/prisma/contract.json');
console.log('Built src/dist from src/');
