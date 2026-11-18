// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";
import { postgres } from "@prisma/composer-prisma-cloud/orm";
import dbContract from "./prisma/db-contract.mjs";

export default compute({
  name: "mawid-nodejs",
  deps: { db: postgres(dbContract) },
  build: node({ module: import.meta.url, dir: "dist", entry: "index.js", dependencies: "external" }),
});
