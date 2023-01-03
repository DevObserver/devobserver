import { config } from '../../config';

export const validateRedirectUrl = (redirectUrl: string): boolean => {
	const allowedOrigins = config.allowedOrigins.split(',');

	return allowedOrigins.filter((origin) => redirectUrl.indexOf(origin) > -1).length > 0;
};
