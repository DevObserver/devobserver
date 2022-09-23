import { NextFunction, Request, Response } from 'express';
import jwt from 'jws';
import passport from 'passport';
import AppleStrategy, { Profile } from 'passport-apple';

import { app } from '../../app';
import { APPLE } from '../../config';
import { authCallbackRedirect } from '../helpers/auth-callback-redirect';
import { getCallbackUrl } from '../helpers/get-callback-url';
import { getUser } from '../helpers/get-user';

export const appleAuth = () => {
	passport.use(
		new AppleStrategy(
			{
				clientID: APPLE.APPLE_CLIENT_ID,
				teamID: APPLE.APPLE_TEAM_ID,
				keyID: APPLE.APPLE_KEY_ID,
				callbackURL: APPLE.APPLE_CALLBACK_URL,
				privateKeyString: APPLE.APPLE_PRIVATE_KEY,
				passReqToCallback: true,
			},
			async (
				req: Request,
				accessToken: string,
				refreshToken: string,
				idToken: any,
				profile: Profile,
				done: any
			) => {
				const idTokenData = jwt.decode(idToken);
				const idTokenDataPayload = JSON.parse(idTokenData.payload);

				const userProfile = {
					id: idTokenDataPayload.email,
					provider: 'apple',
					emails: [{ value: idTokenDataPayload.email }],
				};

				const user = await getUser(userProfile);
				done(null, user);
			}
		)
	);

	app.get('/login/apple', (req: Request, res: Response, next: NextFunction) => {
		const params: any = {
			scope: ['email', 'name'],
			callbackURL: getCallbackUrl(APPLE.APPLE_CALLBACK_URL, req.query.redirect_uri || ''),
			state: JSON.stringify({
				redirect_uri: req.query.redirect_uri,
			}),
		};

		passport.authenticate('apple', params)(req, res, next);
	});

	app.post(
		'/login/apple/callback',
		passport.authenticate('apple', { failureRedirect: '/' }),
		authCallbackRedirect,
		(req: any, res: Response) => {
			return res.redirect(req.redirectUrl);
		}
	);
};
