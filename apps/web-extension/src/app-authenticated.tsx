import { useQuery } from '@apollo/client';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layouts/Layout';
import { layout } from './components/Layouts/Layout.css';
import { ViewLayout } from './components/Layouts/ViewLayout';
import { GET_INITIAL_DATA } from './graphql/queries/get-initial-data';
import { Category, Feed, User } from './types/GeneratedTypes';
import { Channel } from './views/Channel';
import { Channels } from './views/Channels';
import { Feeds } from './views/Feeds';
import { FeedsForYou } from './views/FeedsForYou';
import { FeedsSaved } from './views/FeedsSaved';

type AppAuthenticatedProps = {
	headerOpened: boolean;
	toggleHeader: () => void;
};

interface InitData {
	user: User;
	categories: Category[];
	feedsEditorsChoice: Feed[];
	feedsFeatured: Feed[];
	feedsHighlighted: Feed[];
}

export const AppAuthenticated: React.FC<AppAuthenticatedProps> = ({ headerOpened, toggleHeader }) => {
	const { loading, data } = useQuery<InitData>(GET_INITIAL_DATA);

	if (loading) {
		return (
			<ViewLayout>
				<div className={layout({ state: headerOpened ? 'collapsed' : 'expanded' })}>
					<div style={{ padding: '0 96px' }}>
						<p>Verified</p>
						<p>Preparing...</p>
					</div>
				</div>
			</ViewLayout>
		);
	}

	if (!data) {
		return <></>;
	}

	return (
		<Layout user={data.user} headerOpened={headerOpened} toggleHeader={toggleHeader}>
			<Routes>
				<Route
					path="/"
					element={
						<FeedsForYou
							categories={data.categories}
							feedsEditorsChoice={data.feedsEditorsChoice}
							feedsFeatured={data.feedsFeatured}
							feedsHighlighted={data.feedsHighlighted}
						/>
					}
				/>
				<Route
					path="/latest"
					element={
						<Feeds
							title="Latest"
							subtitle="Discover latest programming news."
							categoryName="Programming"
							categories={data.categories}
							personalized={false}
						/>
					}
				/>
				<Route
					path="/releases"
					element={
						<Feeds
							title="Releases"
							subtitle="Latest releases of the open source projects"
							categoryName="Releases"
							categories={data.categories}
							personalized={true}
						/>
					}
				/>
				<Route
					path="/tech"
					element={
						<Feeds
							title="Tech"
							subtitle="Latest tech news"
							categoryName="Tech"
							categories={data.categories}
							personalized={true}
						/>
					}
				/>
				<Route path="/channels/:id" element={<Channel />} />
				<Route path="/channels" element={<Channels />} />
				<Route path="/saved" element={<FeedsSaved />} />
				<Route
					path="*"
					element={
						<FeedsForYou
							categories={data.categories}
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
