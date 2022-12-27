import { useQuery } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PublicFeedsQuery } from '../api/unauthenticated/operations/public-feeds-query';
import { FeedsHero } from '../components/FeedsHero';
// import { FeaturedFeeds } from '../components/Feeds/FeaturedFeeds';
import { FeedsList } from '../components/FeedsList';
import { Loader } from '../components/Loader';
import { ViewLayout } from '../layouts/ViewLayout';
import { Feed } from '../types/GeneratedTypes';
import { HStack } from '../ui';
import { Container } from '../ui/Container';

interface HomeData {
	feedsEditorsChoice: Feed[];
	feedsFeatured: Feed[];
	feedsHighlighted: Feed[];
	feeds: Feed[];
}

export const Home = () => {
	const navigate = useNavigate();
	const { loading, data } = useQuery<HomeData>(PublicFeedsQuery);

	const onSignIn = () => {
		navigate('/sign-in');
	};

	if (loading) {
		return <Loader title="latest" />;
	}

	if (!data) {
		return <></>;
	}

	return (
		<ViewLayout>
			<FeedsHero editorsChoiceFeeds={data.feedsEditorsChoice} featuredFeeds={data.feedsFeatured} />

			<FeedsList title="Latest" subtitle="Latest programming and tech news" feeds={data.feeds} />

			<HStack className="fixed bottom-24 left-0 w-full z-100">
				<Container>
					<HStack className="bg-gray-1000 dark:bg-gray-50 backdrop-blur p-1 rounded-16 w-full">
						<button
							className="dark:bg-gray-50 dark:hover:bg-gray-1000 rounded-[15px] text-36 font-900 text-white dark:text-gray-1000 dark:hover:text-gray-50 w-full py-4 px-16 uppercase transition-all"
							onClick={onSignIn}>
							Get more
						</button>
					</HStack>
				</Container>
			</HStack>
		</ViewLayout>
	);
};
