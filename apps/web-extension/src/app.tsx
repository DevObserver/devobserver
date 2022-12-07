import { ApolloProvider } from '@apollo/client';
import * as React from 'react';

import { apiAuthenticated, apiUnauthenticated } from './api';
import { AppAuthenticated } from './containers/AppAuthenticated';
import { AppUnauthenticated } from './containers/AppUnauthenticated';
import { useAuth } from './hooks/useAuth';
import { ViewLayout } from './layouts/ViewLayout';

export const App = () => {
	const { isAuth, loading } = useAuth();

	if (loading) {
		return (
			<ViewLayout>
				<div style={{ padding: '0 96px' }}>
					<p>Verifying...</p>
				</div>
			</ViewLayout>
		);
	}

	if (isAuth) {
		return (
			<ApolloProvider client={apiAuthenticated}>
				<AppAuthenticated />
			</ApolloProvider>
		);
	}

	return (
		<ApolloProvider client={apiUnauthenticated}>
			<AppUnauthenticated />
		</ApolloProvider>
	);
};
