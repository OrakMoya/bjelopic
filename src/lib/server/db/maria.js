import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';
const MARIA_URL = env.MARIA_URL;
const MARIA_USER = env.MARIA_USER;
const MARIA_PWD = env.MARIA_PWD;
const MARIA_SCHEMA = env.MARIA_SCHEMA;
const MARIA_PORT = env.MARIA_PORT;

/**
 * @type {Promise<mysql.Connection>}
 */
let mariaConnection;

export function getMariaConnection() {
	if (!mariaConnection) {
		// @ts-ignore
		mariaConnection = mysql.createConnection({
			host: MARIA_URL,
			user: MARIA_USER,
			password: MARIA_PWD,
			port: MARIA_PORT,
			database: MARIA_SCHEMA
		});
	}
	return mariaConnection;
}
