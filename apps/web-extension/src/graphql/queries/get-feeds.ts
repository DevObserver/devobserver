import { gql } from '@apollo/client';

import { FeedFragment } from '../fragments/feeds';

export const GET_FEEDS = gql`
	${FeedFragment}

	query getFeeds($filter: FeedsFilter, $personalized: Boolean) {
		feeds(filter: $filter, personalized: $personalized) {
			...FeedFull
		}
	}
`;
