import { Request, Response } from 'express';
import passport from 'passport';

import { app } from '../app';

export const authVerification = () => {
	app.get(
		'/auth-verification',
		passport.authenticate('jwt', { session: false }),
		(req: Request, res: Response) => {
			res.json({ msg: 'ok' });
		}
	);
};
