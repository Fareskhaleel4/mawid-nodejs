// @ts-check
import { module } from "@prisma/composer";
import { postgres } from "@prisma/composer-prisma-cloud/orm";
import mawidNodejsService from "./src/service.mjs";
import dbContract from "./src/prisma/db-contract.mjs";

export default module("mawid-nodejs", ({ provision }) => {
  const db = provision(
    postgres({ name: "db", contract: dbContract, config: "./prisma.config.ts" }),
  );
  provision(mawidNodejsService, { id: "mawidnodejs", deps: { db } });
});
