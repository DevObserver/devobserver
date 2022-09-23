import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { Profile, Strategy as TwitterStrategy } from 'passport-twitter';

import { app } from '../../app';
import { TWITTER } from '../../config';
import { authCallbackRedirect } from '../helpers/auth-callback-redirect';
import { getCallbackUrl } from '../helpers/get-callback-url';
import { getUser } from '../helpers/get-user';

export const twitterAuth = () => {
	passport.use(
		new TwitterStrategy(
			{
				consumerKey: TWITTER.TWITTER_CONSUMER_KEY,
				consumerSecret: TWITTER.TWITTER_CONSUMER_SECRET,
				callbackURL: TWITTER.TWITTER_CALLBACK_URL,
				userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
			},
			async (accessToken: string, refreshToken: string, profile: Profile, done: any) => {
				const user = await getUser(profile);

				done(null, user);
			}
		)
	);

	app.get('/login/twitter', (req: Request, res: Response, next: NextFunction) => {
		const params: any = {
			scope: ['email', 'user:email'],
			callbackURL: getCallbackUrl(TWITTER.TWITTER_CALLBACK_URL, req.query.redirect_uri || ''),
		};

		passport.authenticate('twitter', params)(req, res, next);
	});

	app.get(
		'/login/twitter/callback',
		passport.authenticate('twitter', {
			failureRedirect: '/',
		}),
		authCallbackRedirect,
		(req: any, res) => {
			return res.redirect(req.redirectUrl);
		}
	);
};
