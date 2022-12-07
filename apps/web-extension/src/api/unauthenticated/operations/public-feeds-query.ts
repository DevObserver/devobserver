import { gql } from '@apollo/client';

import { FeedPublicFragment } from '../fragments/feeds';

export const PublicFeedsQuery = gql`
	${FeedPublicFragment}

	query TodayQuery {
		feedsEditorsChoice: feeds(filter: { where: { award: { name: "Editor's Choice" } }, take: 1 }) {
			...FeedPublicFragment
		}

		feedsFeatured: feeds(filter: { where: { award: { name: "Featured" } }, take: 4 }) {
			...FeedPublicFragment
		}

		feedsHighlighted: feeds(filter: { where: { award: { name: "Highlighted" } }, take: 2 }) {
			...FeedPublicFragment
		}

		feeds: feeds(filter: { where: { category: { name: "Programming" } }, take: 120 }) {
			...FeedPublicFragment
		}
	}
`;
