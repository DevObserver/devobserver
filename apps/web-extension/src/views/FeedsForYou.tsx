import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { EditorsChoiceFeeds } from '../components/Feeds/EditorsChoiceFeeds';
import { FeaturedFeeds } from '../components/Feeds/FeaturedFeeds';
import { FeedsList } from '../components/Feeds/FeedsList';
import { ViewLayout } from '../components/Layouts/ViewLayout';
import { Loader } from '../components/Loader/Loader';
import { GET_FEEDS } from '../graphql/queries/get-feeds';
import { Category, Feed, FeedOrderDirection } from '../types/GeneratedTypes';

interface FeedsForYouData {
	feeds: Feed[];
}

type FeedsForYouProps = {
	categories: Category[];
	feedsEditorsChoice: Feed[];
	feedsFeatured: Feed[];
	feedsHighlighted?: Feed[];
};

export const FeedsForYou: React.FC<FeedsForYouProps> = ({
	categories,
	feedsEditorsChoice,
	feedsFeatured,
}) => {
	const takeLimit = 48;
	const category = categories.find((category) => category.name === 'Programming');

	const [variables] = useState({
		filter: {
			where: {
				categoryId: category?.id || undefined,
			},
			orderBy: {
				created: FeedOrderDirection.Desc,
			},
			take: takeLimit,
			skip: 0,
		},
		personalized: true,
	});
	const { loading, data, fetchMore } = useQuery<FeedsForYouData>(GET_FEEDS, {
		variables: variables,
	});

	const [hasMore, setHasMore] = useState(true);
	const [limit] = useState(600);

	const loadFunc = async () => {
		if (!data) {
			return;
		}

		if (data.feeds.length >= limit || data.feeds.length < 48) {
			setHasMore(false);
			return;
		}

		const lastFeed = data.feeds[data.feeds.length - 1];

		const fetchMerVariables = {
			filter: {
				...variables.filter,
				cursor: lastFeed.index,
			},
			personalized: true,
		};

		await fetchMore({
			variables: fetchMerVariables,
			updateQuery: (previousQueryResult, { fetchMoreResult }) => {
				if (!fetchMoreResult.feeds.length || fetchMoreResult.feeds.length < takeLimit) {
					setHasMore(false);
				}

				return {
					feeds: [...previousQueryResult.feeds, ...fetchMoreResult.feeds],
				};
			},
		});
	};

	if (loading) {
		return <Loader title="forYou" />;
	}

	if (!data) {
		return <></>;
	}

	return (
		<InfiniteScroll loadMore={loadFunc} hasMore={hasMore}>
			<ViewLayout>
				<EditorsChoiceFeeds feeds={feedsEditorsChoice} />
				<FeaturedFeeds feeds={feedsFeatured}></FeaturedFeeds>

				<FeedsList
					title="For You"
					subtitle="Recommendations based on channels you follow"
					feeds={data.feeds}
				/>
			</ViewLayout>
		</InfiniteScroll>
	);
};
