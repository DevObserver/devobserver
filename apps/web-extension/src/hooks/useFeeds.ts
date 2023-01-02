import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';

import { DELETE_FEED } from '../api/authenticated/operations/delete-feed';
import { GET_FEEDS } from '../api/authenticated/operations/get-feeds';
import { SAVE_FEED } from '../api/authenticated/operations/save-feed';
import { Category, Feed, FeedOrderDirection } from '../types/GeneratedTypes';

interface UseFeeds {
	categoryName?: string;
	personalized?: boolean;
	saved?: boolean;
	viewed?: boolean;
}

interface FeedsData {
	feeds: Feed[];
}

const READ_CATEGORY = gql`
	query ReadCategory {
		categories {
			id
			name
		}
	}
`;

export const useFeeds = ({ categoryName, personalized, saved, viewed }: UseFeeds) => {
	const client = useApolloClient();
	const { categories } = client.readQuery({
		query: READ_CATEGORY,
	});

	const category = categories.find((item: Category) => item.name === categoryName);

	const takeLimit = 48;
	const variables = {
		filter: {
			...(category && {
				where: {
					categoryId: category.id || undefined,
				},
			}),
			orderBy: {
				created: FeedOrderDirection.Desc,
			},
			take: takeLimit,
			skip: 0,
		},
		personalized,
		saved,
		viewed,
	};

	const { loading, error, data, fetchMore } = useQuery<FeedsData>(GET_FEEDS, {
		variables: variables,
	});

	const [saveFeedMutation] = useMutation(SAVE_FEED);
	const [deleteFeedMutation] = useMutation(DELETE_FEED);

	const [hasMore, setHasMore] = useState(true);
	const [limit] = useState(600);

	const saveFeed = async (feed: Feed) => {
		await saveFeedMutation({
			variables: { id: feed.id },
			update: (cache, { data: { feedSave } }) => {
				if (!data) {
					return;
				}

				try {
					const feeds = data.feeds.map((feed) => {
						if (feed.id === feedSave.id) {
							return {
								...feed,
								saved: true,
							};
						}
						return feed;
					});

					cache.writeQuery({ query: GET_FEEDS, data: { feeds } });
				} catch (e) {
					console.log('error updating', e);
				}
			},
		});
	};

	const deleteFeed = async (feed: Feed) => {
		await deleteFeedMutation({
			variables: { id: feed.id },
			update: (cache, { data: { feedDelete } }) => {
				if (!data) {
					return;
				}

				try {
					const feeds = data.feeds.map((feed) => {
						if (feed.id === feedDelete.id) {
							return {
								...feed,
								saved: false,
							};
						}
						return feed;
					});

					cache.writeQuery({ query: GET_FEEDS, data: { feeds } });
				} catch (e) {
					console.log('error updating', e);
				}
			},
		});
	};

	const toggleFeed = async (feed: Feed) => {
		if (!feed.saved) {
			await saveFeed(feed);
		} else {
			await deleteFeed(feed);
		}
	};

	const loadMore = async () => {
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

	return {
		loading,
		error,
		data,
		hasMore,
		toggleFeed,
		loadMore,
	};
};
