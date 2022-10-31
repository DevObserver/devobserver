import { ALLOWED_ORIGINS } from '../../config';

export const validateRedirectUrl = (redirectUrl: string): boolean => {
	const allowedOrigins = ALLOWED_ORIGINS.split(',');

	return allowedOrigins.filter((origin) => redirectUrl.indexOf(origin) > -1).length > 0;
};
