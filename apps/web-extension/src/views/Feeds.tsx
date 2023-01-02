import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { FeedsList } from '../components/FeedsList';
import { Loader } from '../components/Loader';
import { useFeeds } from '../hooks/useFeeds';
import { ViewLayout } from '../layouts/ViewLayout';

interface FeedsProps {
	title: string;
	subtitle: string;
	categoryName?: string;
	personalized?: boolean;
	saved?: boolean;
	viewed?: boolean;
}

export const Feeds: React.FC<FeedsProps> = ({
	title,
	subtitle,
	categoryName,
	personalized,
	saved,
	viewed,
}) => {
	const { loading, data, hasMore, loadMore, toggleFeed } = useFeeds({
		categoryName,
		personalized,
		saved,
		viewed,
	});

	if (loading) {
		return <Loader title={title} />;
	}

	if (!data) {
		return <></>;
	}

	return (
		<InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
			<ViewLayout>
				<FeedsList title={title} subtitle={subtitle} feeds={data.feeds} toggleFeed={toggleFeed} />
			</ViewLayout>
		</InfiniteScroll>
	);
};
