import { gql } from '@apollo/client';

export const FeedFragment = gql`
	fragment FeedFull on Feed {
		id
		index
		title
		url
		image
		channel {
			id
			name
			image
		}
		type {
			name
		}
		views
		likes
		created
		modified
	}
`;
