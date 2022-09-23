import passport from 'passport';

import { app } from '../app';
import { authLogout } from './auth-logout';
import { authSession } from './auth-session';
import { authVerification } from './auth-verification';
import { providers } from './providers';

export const auth = () => {
	authSession();

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user: never, done) => {
		done(null, user);
	});

	providers();
	authVerification();
	authLogout();
};
