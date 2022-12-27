import React, { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { FeedsHero } from '../components/FeedsHero';
import { FeedsList } from '../components/FeedsList';
import { Loader } from '../components/Loader';
import { useFeeds } from '../hooks/useFeeds';
import { Feed } from '../types/GeneratedTypes';

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
			<div className="flex flex-col gap-96">
				<FeedsHero editorsChoiceFeeds={feedsEditorsChoice} featuredFeeds={feedsFeatured} />

				<FeedsList
					title="For You"
					subtitle="Recommendations based on channels you follow"
					feeds={data.feeds}
					toggleFeed={toggleFeed}
				/>
			</div>
		</InfiniteScroll>
	);
};
