import { config } from '../../config';

export const signOut = () => {
	const redirectUri = encodeURI(window.location.href);

	window.location.href = `${config.baseUrl}/logout?redirect_uri=${redirectUri}`;
};
