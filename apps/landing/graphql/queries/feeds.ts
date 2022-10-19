import { gql } from 'graphql-request';

import { FEED_FRAGMENT } from '../fragments/feeds';

export const PUBLIC_FEEDS_QUERY = gql`
	${FEED_FRAGMENT}

	query TodayQuery {
		feedsEditorsChoice: feeds(filter: { where: { award: { name: "Editor's Choice" } }, take: 48 }) {
			...FeedFull
		}

		feeds: feeds(filter: { where: { award: { name: "Featured" } }, take: 72 }) {
			...FeedFull
		}
	}
`;
