import { appleAuth } from './apple';
import { githubAuth } from './github';
import { googleAuth } from './google';
import { jwtAuth } from './jwt';

export const providers = () => {
	jwtAuth();
	appleAuth();
	githubAuth();
	googleAuth();
};
