// @ts-check
// The emitted data contract, wrapped once for both ends of the database
// connection: the service's `postgres(...)` dependency and the resource the
// module provisions.
import { dataContract } from "@prisma/composer-prisma-cloud/orm";
import contractJson from "./contract.json" with { type: "json" };

export default dataContract(contractJson);
