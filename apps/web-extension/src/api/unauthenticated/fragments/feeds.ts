import { gql } from '@apollo/client';

export const FeedPublicFragment = gql`
	fragment FeedPublicFragment on Feed {
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
