import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

import { config } from '../../config';

export const jwtToken = (user: User) => {
	return jwt.sign(
		{
			iss: config.jwtIssuer,
			sub: config.jwrSub,
			userId: user.id,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 1),
		},
		config.jwtIssuer
	);
};
