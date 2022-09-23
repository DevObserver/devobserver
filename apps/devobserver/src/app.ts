import { log } from '@devobserver/log';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { auth } from './auth';
import { MAINTENANCE } from './config';
import { graphql } from './graphql';
import { graphqlPublic } from './graphql-public';
import { maintenance } from './middlewares/maintenance';
import { routes } from './routes';
import { notFound } from './routes/not-found';

export const app = express();
export const appNameSpace = 'DevObserver';
const port = process.env.PORT || 3000;
const isUnderMaintenance = MAINTENANCE === 'enabled';

(async () => {
	app.use(helmet());
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(maintenance(isUnderMaintenance));

	auth();
	routes();
	await graphqlPublic();
	await graphql();
	notFound();

	const server = app.listen(port, () => {
		log.info(appNameSpace, `DevObserver App server started at http://localhost:${port}/`);
	});

	['SIGINT', 'SIGTERM'].forEach((signal) => {
		process.once(signal, () => {
			server.close();
		});
	});
})();
