import { ApolloClient, InMemoryCache } from '@apollo/client';

import { config } from '../../config';

export const clientPublic = new ApolloClient({
	uri: config.publicApiUrl,
	cache: new InMemoryCache(),
});
