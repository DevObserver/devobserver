import { gql } from '@apollo/client';

import { FeedFragment } from '../fragments/feeds';
import { UserFragment } from '../fragments/user';

export const GET_INITIAL_DATA = gql`
	${UserFragment}
	${FeedFragment}

	query InitQuery {
		user {
			...UserFragment
		}

		categories {
			id
			name
		}

		feedsEditorsChoice: feeds(
			filter: { where: { award: { name: "Editor's Choice" } }, orderBy: { created: desc }, take: 1 }
		) {
			...FeedFull
		}

		feedsFeatured: feeds(
			filter: { where: { award: { name: "Featured" } }, orderBy: { created: desc }, take: 4 }
		) {
			...FeedFull
		}
	}
`;
