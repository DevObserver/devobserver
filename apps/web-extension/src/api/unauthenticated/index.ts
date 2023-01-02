import { ApolloClient, InMemoryCache } from '@apollo/client';

import { config } from '../../../config';

export const apiUnauthenticated = new ApolloClient({
	uri: config.publicApiUrl,
	cache: new InMemoryCache(),
});
