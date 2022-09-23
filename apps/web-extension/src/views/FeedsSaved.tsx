import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { FeedsList } from '../components/Feeds/FeedsList';
import { ViewLayout } from '../components/Layouts/ViewLayout';
import { Loader } from '../components/Loader/Loader';
import { GET_SAVED_FEEDS } from '../graphql/queries/get-saved-feeds';
import { Feed } from '../types/GeneratedTypes';

interface FeedsSavedData {
	feeds: Feed[];
}

export const FeedsSaved = () => {
	const { loading, data, fetchMore } = useQuery<FeedsSavedData>(GET_SAVED_FEEDS, {
		variables: {
			take: 120,
			skip: 0,
		},
	});
	const [hasMore, setHasMore] = useState(true);

	const loadFunc = async () => {
		if (!data) {
			return;
		}

		await fetchMore({
			variables: {
				skip: data.feeds.length,
				take: 48,
				category: 1,
				personalized: false,
			},
			updateQuery: (previousQueryResult, { fetchMoreResult }) => {
				if (fetchMoreResult.feeds.length <= 0) {
					setHasMore(false);
				}

				return {
					feeds: [...previousQueryResult.feeds, ...fetchMoreResult.feeds],
				};
			},
		});
	};

	if (loading) {
		return <Loader title="saved" />;
	}

	return (
		<InfiniteScroll loadMore={loadFunc} hasMore={hasMore}>
			<ViewLayout>
				<FeedsList title="Saved" feeds={data && data.feeds ? data.feeds : []} />
			</ViewLayout>
		</InfiniteScroll>
	);
};
