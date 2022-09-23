import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { FeedsList } from '../components/Feeds/FeedsList';
import { ViewLayout } from '../components/Layouts/ViewLayout';
import { Loader } from '../components/Loader/Loader';
import { GET_FEEDS } from '../graphql/queries/get-feeds';
import { Category, Feed, FeedOrderDirection } from '../types/GeneratedTypes';

interface FeedsData {
	feeds: Feed[];
}

interface FeedsProps {
	title: string;
	subtitle: string;
	categories: Category[];
	categoryName: string;
	personalized: boolean;
}

export const Feeds: React.FC<FeedsProps> = ({ title, subtitle, categories, categoryName, personalized }) => {
	const takeLimit = 48;
	const category = categories.find((category) => category.name === categoryName);

	const variables = {
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
		personalized: personalized,
	};
	const { loading, data, fetchMore } = useQuery<FeedsData>(GET_FEEDS, {
		variables: variables,
	});
	const [hasMore, setHasMore] = useState(true);
	const [limit] = useState(600);

	const loadFunc = async () => {
		if (!data) {
			return;
		}

		if (data.feeds.length >= limit || data.feeds.length < takeLimit) {
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
		return <Loader title={title} />;
	}

	if (!data) {
		return <></>;
	}

	return (
		<InfiniteScroll loadMore={loadFunc} hasMore={hasMore}>
			<ViewLayout>
				<FeedsList title={title} subtitle={subtitle} feeds={data.feeds} />
			</ViewLayout>
		</InfiniteScroll>
	);
};
