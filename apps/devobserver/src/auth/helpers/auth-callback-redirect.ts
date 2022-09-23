import { IOS_CLIENT_APP_REDIRECT_URL } from '../../config';
import { jwtToken } from './jwt-token';
import { validateRedirectUrl } from './validate-redirect-url';

const getRedirectUrl = (req: any) => {
	let redirectUrl;
	let state;

	try {
		state = req.query && req.query.state ? JSON.parse(req.query.state) : undefined;
	} catch (e) {
		console.log(e);
	}

	const query = req.query;

	if (state && state.redirect_uri) {
		redirectUrl = state.redirect_uri;
	}

	if (query && query.redirect_uri) {
		redirectUrl = query.redirect_uri;
	}

	return redirectUrl;
};

export const authCallbackRedirect = (req: any, res: any, next: any) => {
	const token = jwtToken(req.user);
	const redirectUrl = getRedirectUrl(req);
	const cookieExpirationDate = 31536000000; // 60*60*24*365*1000

	if (redirectUrl && validateRedirectUrl(redirectUrl)) {
		req.redirectUrl = redirectUrl;
	} else {
		req.redirectUrl = `${IOS_CLIENT_APP_REDIRECT_URL}=${token}`;
	}

	res.cookie('accessToken', token, { maxAge: cookieExpirationDate });
	next();
};
