import { gql } from '@apollo/client';

import { FeedFragment } from '../fragments-public/feeds';

export const PublicFeedsQuery = gql`
	${FeedFragment}

	query TodayQuery {
		feedsEditorsChoice: feeds(filter: { where: { award: { name: "Editor's Choice" } }, take: 2 }) {
			...FeedFull
		}

		feedsFeatured: feeds(filter: { where: { award: { name: "Featured" } }, take: 3 }) {
			...FeedFull
		}

		feedsHighlighted: feeds(filter: { where: { award: { name: "Highlighted" } }, take: 2 }) {
			...FeedFull
		}

		feeds: feeds(filter: { where: { category: { name: "Programming" } }, take: 120 }) {
			...FeedFull
		}
	}
`;
