import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_USER } from '../config';

export const connection = {
	host: REDIS_HOST,
	port: REDIS_PORT,
	user: REDIS_USER,
	db: 1,
	password: REDIS_PASSWORD,
	// tls: {},
};
