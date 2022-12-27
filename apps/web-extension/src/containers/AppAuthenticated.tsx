import { useQuery } from '@apollo/client';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { GET_INITIAL_DATA } from '../api/authenticated/operations/get-initial-data';
import { Layout } from '../layouts/Layout';
import { ViewLayout } from '../layouts/ViewLayout';
import { Category, Feed, User } from '../types/GeneratedTypes';
import { Channel } from '../views/Channel';
import { Channels } from '../views/Channels';
import { Feeds } from '../views/Feeds';
import { Today } from '../views/Today';

interface InitData {
	user: User;
	categories: Category[];
	feedsEditorsChoice: Feed[];
	feedsFeatured: Feed[];
	feedsHighlighted: Feed[];
}

type AuthenticatedRoute = {
	path: string;
	name: string;
	element: React.ReactNode;
};

const authenticatedRoutes: AuthenticatedRoute[] = [
	{
		path: '/latest',
		name: 'latest',
		element: (
			<Feeds
				title="Latest"
				subtitle="Discover latest programming news."
				categoryName="Programming"
				personalized={false}
			/>
		),
	},
	{
		path: '/releases',
		name: 'Releases',
		element: (
			<Feeds
				title="Releases"
				subtitle="Latest releases of the open source projects"
				categoryName="Releases"
				personalized={true}
			/>
		),
	},
	{
		path: '/tech',
		name: 'Tech',
		element: <Feeds title="Tech" subtitle="Latest tech news" categoryName="Tech" personalized={true} />,
	},
	{
		path: '/saved',
		name: 'Saved',
		element: <Feeds title="Saved" subtitle="Your saved feeds" saved={true} />,
	},
	{
		path: '/history',
		name: 'History',
		element: <Feeds title="History" subtitle="Your viewed feeds" viewed={true} />,
	},
	{ path: '/configure', name: 'Channels', element: <Channels /> },
	{ path: '/channel/:id', name: 'Channel', element: <Channel /> },
	// { path: '/search', element: <Channel /> },
	// { path: '*', name: 'any', element: <Today /> },
];

export const AppAuthenticated = () => {
	const { loading, data } = useQuery<InitData>(GET_INITIAL_DATA);

	if (loading) {
		return (
			<ViewLayout>
				<div style={{ padding: '0 96px' }}>
					<p>Verified</p>
					<p>Preparing...</p>
				</div>
			</ViewLayout>
		);
	}

	if (!data) {
		return <></>;
	}

	return (
		<Layout user={data.user}>
			<Routes>
				<Route
					path="/"
					element={
						<Today
							feedsEditorsChoice={data.feedsEditorsChoice}
							feedsFeatured={data.feedsFeatured}
							feedsHighlighted={data.feedsHighlighted}
						/>
					}
				/>
				{authenticatedRoutes.map((route) => {
					return <Route key={route.name} path={route.path} element={route.element} />;
				})}
				<Route
					path="*"
					element={
						<Today
							feedsEditorsChoice={data.feedsEditorsChoice}
							feedsFeatured={data.feedsFeatured}
							feedsHighlighted={data.feedsHighlighted}
						/>
					}
				/>
			</Routes>
		</Layout>
	);
};
