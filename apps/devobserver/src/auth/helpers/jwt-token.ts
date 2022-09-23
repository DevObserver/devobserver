import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

import { JWT_ISSUER, JWT_SECRET, JWT_SUB } from '../../config';

export const jwtToken = (user: User) => {
	return jwt.sign(
		{
			iss: JWT_ISSUER,
			sub: JWT_SUB,
			userId: user.id,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 1),
		},
		JWT_SECRET
	);
};
