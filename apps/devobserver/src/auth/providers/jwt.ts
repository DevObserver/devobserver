import { prisma } from '@devobserver/prisma';
import passport from 'passport';
import jwtStrategy, { StrategyOptions } from 'passport-jwt';

import { JWT_ISSUER, JWT_SECRET } from '../../config';

const JwtStrategy = jwtStrategy.Strategy;

const jwtExtractor: any = (req: any) => {
	let headerAccessToken = null;
	let cookieAccessToken = null;
	const authHeader = String(req.headers['authorization'] || '');

	if (req && req.cookies) {
		cookieAccessToken = req.cookies['accessToken'];
	}

	if (authHeader && authHeader.startsWith('Bearer ')) {
		headerAccessToken = authHeader.substring(7, authHeader.length);
	}

	return cookieAccessToken || headerAccessToken;
};

const opts: StrategyOptions = {
	jwtFromRequest: jwtExtractor,
	secretOrKey: JWT_SECRET,
	issuer: JWT_ISSUER,
};

export const jwtAuth = () => {
	passport.use(
		new JwtStrategy(opts, async (jwtPayload, cb) => {
			try {
				const user = await prisma.user.findFirst({
					where: {
						id: jwtPayload.userId,
					},
				});

				cb(null, user || false);
			} catch {
				cb(null, false);
			}
		})
	);
};
