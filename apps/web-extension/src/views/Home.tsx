import { useQuery } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PublicFeedsQuery } from '../api/unauthenticated/operations/public-feeds-query';
// import { FeaturedFeeds } from '../components/Feeds/FeaturedFeeds';
import { FeedsList } from '../components/FeedList/FeedsList';
import { FeedsHero } from '../components/FeedsHero/FeedsHero';
import { Loader } from '../components/Loader/Loader';
import { ViewLayout } from '../layouts/ViewLayout';
import { Feed } from '../types/GeneratedTypes';
import { Button, Flex, Heading } from '../ui';

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
			<FeedsHero editorsChoiceFeeds={data.feedsEditorsChoice} featuredFeeds={data.feedsFeatured} />

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
