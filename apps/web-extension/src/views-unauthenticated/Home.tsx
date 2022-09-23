import { useQuery } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, Heading } from '../components/Elements';
import { EditorsChoiceFeeds } from '../components/Feeds/EditorsChoiceFeeds';
import { FeaturedFeeds } from '../components/Feeds/FeaturedFeeds';
import { FeedsList } from '../components/Feeds/FeedsList';
import { ViewLayout } from '../components/Layouts/ViewLayout';
import { Loader } from '../components/Loader/Loader';
import { PublicFeedsQuery } from '../graphql/queries-public/public-feeds-query';
import { Feed } from '../types/GeneratedTypes';

interface HomeData {
	feedsEditorsChoice: Feed[];
	feedsFeatured: Feed[];
	feedsHighlighted: Feed[];
	feeds: Feed[];
}

export const Home = () => {
	const navigate = useNavigate();
	const { loading, error, data } = useQuery<HomeData>(PublicFeedsQuery);

	if (loading) {
		return <Loader title="latest" />;
	}

	if (error) {
		return <p>Error... {JSON.stringify(error)}</p>;
	}

	if (!data) {
		return <></>;
	}

	const onSignIn = () => {
		navigate('/sign-in');
	};

	return (
		<ViewLayout>
			<EditorsChoiceFeeds feeds={data.feedsEditorsChoice} />
			<FeaturedFeeds feeds={data.feedsFeatured}></FeaturedFeeds>

			<FeedsList title="Latest" subtitle="Latest programming and tech news" feeds={data.feeds} />

			<Flex as="section" flexDirection="column" alignItems="center" pt={48} pb={24}>
				<Heading as="h1" variant="h4" align="center" mb={24}>
					Would you like to get more latest news?
				</Heading>
				<Button variant="primary" onClick={onSignIn}>
					Sing In
				</Button>
			</Flex>
		</ViewLayout>
	);
};
