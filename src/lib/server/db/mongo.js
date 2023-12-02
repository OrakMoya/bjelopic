import { env } from "$env/dynamic/private";
import { MongoClient } from "mongodb";
const MONGO_URL = env.MONGO_URL;
const MONGO_PORT = env.MONGO_PORT;
const MONGO_DB = env.MONGO_DB;

const client = new MongoClient("mongodb://"+MONGO_URL+":"+MONGO_PORT+"/"+MONGO_DB);

export async function start_mongo() {
	return client.connect();
}

export async function stop_mongo(){
	await client.close();
}

export default client.db();