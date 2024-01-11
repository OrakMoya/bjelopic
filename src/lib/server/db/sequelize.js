import { Model, Sequelize } from 'sequelize';
import { env } from '$env/dynamic/private';
import { initModels } from '../models/init-models';

const MARIA_URL = env.MARIA_URL;
const MARIA_USER = env.MARIA_USER;
const MARIA_PWD = env.MARIA_PWD;
const MARIA_SCHEMA = env.MARIA_SCHEMA;
const MARIA_PORT = env.MARIA_PORT;

export const sequelizeClient = new Sequelize(MARIA_SCHEMA, MARIA_USER, MARIA_PWD, {
	host: MARIA_URL,
	port: Number(MARIA_PORT),
	dialect: 'mariadb'
});

sequelizeClient
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});

export let models = initModels(sequelizeClient);
