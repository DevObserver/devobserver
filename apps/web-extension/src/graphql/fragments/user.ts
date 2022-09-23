import { gql } from '@apollo/client';

export const UserFragment = gql`
	fragment UserFragment on User {
		email
		name
		image
		accounts {
			provider
			displayName
			userName
		}
	}
`;

export const USER_STATS_FRAGMENT = gql`
	fragment UserStatsFull on UserStats {
		feedCount
		feedViews
		feedFavourites
		channelsCount
		channelsFollowing
	}
`;
