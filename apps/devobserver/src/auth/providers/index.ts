import { appleAuth } from './apple';
import { githubAuth } from './github';
import { googleAuth } from './google';
import { jwtAuth } from './jwt';
import { twitterAuth } from './twitter';

export const providers = () => {
	jwtAuth();
	appleAuth();
	githubAuth();
	googleAuth();
	twitterAuth();
};
