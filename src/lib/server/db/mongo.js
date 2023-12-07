import { env } from "$env/dynamic/private";
import { MongoClient } from "mongodb";
const MONGO_URL = env.MONGO_URL;
const MONGO_PORT = env.MONGO_PORT;
const MONGO_DB = env.MONGO_DB;
const MONGO_USER = env.MONGO_USER;
const MONGO_USER_PWD = env.MONGO_USER_PWD;

const MONGO_CONNECTION_URL="mongodb://"+MONGO_USER+":"+MONGO_USER_PWD+"@"+MONGO_URL+":"+MONGO_PORT+"/"+MONGO_DB

const client = new MongoClient(MONGO_CONNECTION_URL);

export async function start_mongo() {
	console.log("Connecting with: " + MONGO_CONNECTION_URL);
	return client.connect();
}

export async function stop_mongo(){
	await client.close();
}

export default client.db();