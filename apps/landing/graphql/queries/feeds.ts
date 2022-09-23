import { gql } from 'graphql-request';
import { FEED_FRAGMENT } from '../fragments/feeds';

export const PUBLIC_FEEDS_QUERY = gql`
	${FEED_FRAGMENT}

	query TodayQuery {
		feedsEditorsChoice: feeds(take: 2, awardId: 1) {
			...FeedFull
		}

		feedsFeatured: feeds(take: 3, awardId: 2) {
			...FeedFull
		}

		feedsHighlighted: feeds(take: 2, awardId: 3) {
			...FeedFull
		}

		feeds: feeds(take: 120, categoryId: 1) {
			...FeedFull
		}
	}
`;
