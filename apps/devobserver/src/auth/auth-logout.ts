import cors from 'cors';
import { Request, Response } from 'express';
import passport from 'passport';

import { app } from '../app';
import { config } from '../config';
import { corsOptionsDelegate } from '../routes/routes-guard';

export const authLogout = () => {
	app.get(
		'/logout',
		cors(corsOptionsDelegate),
		passport.authenticate('jwt', { session: false }),
		(req: Request, res: Response, next) => {
			req.logout(function (err) {
				if (err) {
					return next(err);
				}
				let redirectUrl = '/';

				if (req.query && req.query.redirect_uri) {
					redirectUrl = req.query.redirect_uri as string;
				}

				res.clearCookie(config.cookieName);
				res.clearCookie('accessToken');

				res.redirect(redirectUrl);
			});
		}
	);
};
