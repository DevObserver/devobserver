import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { Profile, Strategy as GithubStrategy } from 'passport-github2';

import { app } from '../../app';
import { GITHUB } from '../../config';
import { authCallbackRedirect } from '../helpers/auth-callback-redirect';
import { getCallbackUrl } from '../helpers/get-callback-url';
import { getUser } from '../helpers/get-user';

export const githubAuth = () => {
	passport.use(
		new GithubStrategy(
			{
				clientID: GITHUB.GITHUB_CLIENT_ID,
				clientSecret: GITHUB.GITHUB_CLIENT_SECRET,
				callbackURL: GITHUB.GITHUB_CALLBACK_URL,
				scope: ['read:user', 'email', 'user:email'],
			},
			async (accessToken: string, refreshToken: string, profile: Profile, done: any) => {
				const user = await getUser(profile);
				done(null, user);
			}
		)
	);

	app.get('/login/github', (req: Request, res: Response, next: NextFunction) => {
		const params: any = {
			scope: ['read:user', 'email', 'user:email'],
			callbackURL: getCallbackUrl(GITHUB.GITHUB_CALLBACK_URL, req.query.redirect_uri || ''),
		};

		passport.authenticate('github', params)(req, res, next);
	});

	app.get(
		'/login/github/callback',
		passport.authenticate('github', {
			failureRedirect: '/',
		}),
		authCallbackRedirect,
		(req: any, res) => {
			return res.redirect(req.redirectUrl);
		}
	);
};
