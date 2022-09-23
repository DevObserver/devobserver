import { config } from '../../config';

export const signIn = (provider: string) => {
	const redirectUri = encodeURI(window.location.href);

	window.location.href = `${config.baseUrl}/login/${provider}?redirect_uri=${redirectUri}`;
};
