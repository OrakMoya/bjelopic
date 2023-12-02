import { start_mongo } from "$lib/server/db/mongo";

start_mongo().catch( (reason) => console.log(reason) );