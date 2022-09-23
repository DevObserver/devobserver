import { validateRedirectUrl } from './validate-redirect-url';

export const getCallbackUrl = (callbackUrl: string, redirectUrl: any) => {
	if (redirectUrl && validateRedirectUrl(redirectUrl)) {
		callbackUrl += `?redirect_uri=${redirectUrl}`;
	}

	return callbackUrl;
};
