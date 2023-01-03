import pgSimple from 'connect-pg-simple';
import expressSession from 'express-session';
import pg, { PoolConfig } from 'pg';

import { app } from '../app';
import { config } from '../config';

const pgSession = pgSimple(expressSession);
const pgPoolConnectionConfig: PoolConfig = {
	connectionString: config.databaseUrl.replace('sslmode=require', 'sslmode=no-verify'),
	max: 22,
};

if (config.databaseCA && config.databaseCA !== '') {
	pgPoolConnectionConfig.ssl = {
		ca: config.databaseCA,
		rejectUnauthorized: false,
	};
}

const pgPool = new pg.Pool(pgPoolConnectionConfig);

export const authSession = () => {
	const maxAge = 31536000000; // 60*60*24*365*1000
	const sessionOptions = {
		name: config.cookieName,
		cookie: { maxAge: maxAge },
		secret: config.cookieSecret,
		saveUninitialized: false,
		resave: false,
		httpOnly: true,
		store: new pgSession({
			pool: pgPool,
			tableName: 'userSession',
			createTableIfMissing: true,
		}),
	};

	app.use(expressSession(sessionOptions));
};
