import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { config } from '../../../config';

const link = createHttpLink({
	uri: config.apiUrl,
	credentials: 'include',
});

export const apiAuthenticated = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});
