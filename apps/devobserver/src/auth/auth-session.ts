import pgSimple from 'connect-pg-simple';
import expressSession from 'express-session';
import pg, { PoolConfig } from 'pg';

import { app } from '../app';
import { COOKIE_NAME, COOKIE_SECRET, DATABASE_CA, DATABASE_URL } from '../config';

const pgSession = pgSimple(expressSession);
const pgPoolConnectionConfig: PoolConfig = {
	connectionString: DATABASE_URL.replace('sslmode=require', 'sslmode=no-verify'),
	max: 22,
};

if (process.env.NODE_ENV === 'production') {
	pgPoolConnectionConfig.ssl = {
		ca: DATABASE_CA,
		rejectUnauthorized: false,
	};
}

const pgPool = new pg.Pool(pgPoolConnectionConfig);

export const authSession = () => {
	const maxAge = 31536000000; // 60*60*24*365*1000
	const sessionOptions = {
		name: COOKIE_NAME,
		cookie: { maxAge: maxAge },
		secret: COOKIE_SECRET,
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
