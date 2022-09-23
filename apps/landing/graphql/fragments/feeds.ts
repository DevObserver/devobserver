import { gql } from 'graphql-request';

export const FEED_FRAGMENT = gql`
	fragment FeedFull on Feed {
		id
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
