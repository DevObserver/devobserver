import cors from 'cors';
import passport from 'passport';

import { app } from '../app';
import { config } from '../config';

const allowList = config.allowedOrigins.split(',');
export const corsOptionsDelegate = (req: any, callback: any) => {
	let corsOptions;
	if (allowList.indexOf(req.header('Origin')) !== -1) {
		corsOptions = { origin: true };
	} else {
		corsOptions = { origin: false };
	}
	callback(null, corsOptions);
};

export const routesGuard = () => {
	app.get('/api', cors(corsOptionsDelegate), passport.authenticate('jwt', { session: false }));
	app.post('/api', cors(corsOptionsDelegate), passport.authenticate('jwt', { session: false }));
};
