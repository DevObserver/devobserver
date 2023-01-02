import { gql } from '@apollo/client';

import { FeedFragment } from '../fragments/feeds';

export const GET_SAVED_FEEDS = gql`
	${FeedFragment}

	query SavedQuery($take: Int, $skip: Int) {
		feedsSaved(take: $take, skip: $skip) {
			...FeedFull
		}
	}
`;
