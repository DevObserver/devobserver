import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { app } from '../../app';
import { GOOGLE } from '../../config';
import { authCallbackRedirect } from '../helpers/auth-callback-redirect';
import { getUser } from '../helpers/get-user';

export const googleAuth = () => {
	passport.use(
		new GoogleStrategy(
			{
				clientID: GOOGLE.GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE.GOOGLE_CLIENT_SECRET,
				callbackURL: GOOGLE.GOOGLE_CALLBACK_URL,
				scope: ['email', 'profile'],
			},
			async (accessToken: string, refreshToken: string, profile: Profile, done: any) => {
				const user = await getUser(profile);
				done(null, user);
			}
		)
	);

	app.get('/login/google', (req: Request, res: Response, next: NextFunction) => {
		const params: any = {
			scope: ['email', 'profile'],
			callbackURL: GOOGLE.GOOGLE_CALLBACK_URL,
			state: JSON.stringify({
				redirect_uri: req.query.redirect_uri,
			}),
		};

		passport.authenticate('google', params)(req, res, next);
	});

	app.get(
		'/login/google/callback',
		passport.authenticate('google', {
			failureRedirect: '/',
		}),
		authCallbackRedirect,
		(req: any, res) => {
			return res.redirect(req.redirectUrl);
		}
	);
};
