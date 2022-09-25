import { gql } from 'graphql-request';
import { FEED_FRAGMENT } from '../fragments/feeds';

export const PUBLIC_FEEDS_QUERY = gql`
	${FEED_FRAGMENT}

	query TodayQuery {
		feeds: feeds(filter: { take: 120 }) {
			...FeedFull
		}
	}
`;
