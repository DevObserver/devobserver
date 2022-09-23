import type { User as UserType } from '@prisma/client';

declare global {
	namespace Express {
		interface User extends UserType {
			prop?: string;
		}

		export interface Request {
			redirectUrl?: string;
		}
	}
}
