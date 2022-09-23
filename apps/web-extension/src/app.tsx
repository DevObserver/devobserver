import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { AppAuthenticated } from './app-authenticated';
import { AppUnauthenticated } from './app-unauthenticated';
import { layout } from './components/Layouts/Layout.css';
import { ViewLayout } from './components/Layouts/ViewLayout';
import { client } from './graphql/client';
import { clientPublic } from './graphql/client-public';
import { useAuth } from './hooks/useAuth';

export const App = () => {
	const { isAuth, loading } = useAuth();
	const [headerOpened, setHeader] = useState(true);

	useEffect(() => {
		const localStorageItem = localStorage.getItem('headerOpened');
		if (localStorageItem) {
			setHeader(JSON.parse(localStorageItem));
		}
	}, [setHeader]);

	const toggleHeader = () => {
		localStorage.setItem('headerOpened', JSON.stringify(!headerOpened));
		setHeader(!headerOpened);
	};

	if (loading) {
		return (
			<ViewLayout>
				<div className={layout({ state: headerOpened ? 'collapsed' : 'expanded' })}>
					<div style={{ padding: '0 96px' }}>
						<p>Verifying...</p>
					</div>
				</div>
			</ViewLayout>
		);
	}

	if (isAuth) {
		return (
			<ApolloProvider client={client}>
				<AppAuthenticated headerOpened={headerOpened} toggleHeader={toggleHeader} />
			</ApolloProvider>
		);
	}

	return (
		<ApolloProvider client={clientPublic}>
			<AppUnauthenticated headerOpened={headerOpened} toggleHeader={toggleHeader} />
		</ApolloProvider>
	);
};
