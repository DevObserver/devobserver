import { gql, useApolloClient } from '@apollo/client';
import React, { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { FeedsList } from '../components/FeedList/FeedsList';
import { FeedsHero } from '../components/FeedsHero/FeedsHero';
import { Loader } from '../components/Loader/Loader';
import { useFeeds } from '../hooks/useFeeds';
import { Category, Feed } from '../types/GeneratedTypes';
import { Flex } from '../ui';

interface TodayProps {
	feedsEditorsChoice: Feed[];
	feedsFeatured: Feed[];
	feedsHighlighted?: Feed[];
}

export const Today: FC<TodayProps> = ({ feedsEditorsChoice, feedsFeatured }) => {
	const { loading, data, hasMore, loadMore, toggleFeed } = useFeeds({
		categoryName: 'Programming',
		personalized: true,
	});

	if (loading) {
		return <Loader title="forYou" />;
	}

	if (!data) {
		return <></>;
	}

	return (
		<InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
			<Flex flexDirection="column" gap={48}>
				<FeedsHero editorsChoiceFeeds={feedsEditorsChoice} featuredFeeds={feedsFeatured} />

				<FeedsList
					title="For You"
					subtitle="Recommendations based on channels you follow"
					feeds={data.feeds}
					toggleFeed={toggleFeed}
				/>
			</Flex>
		</InfiniteScroll>
	);
};
