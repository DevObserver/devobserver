import { gql } from 'apollo-server';

export const userTypeDef = gql`
	type Account {
		provider: String
		displayName: String
		userName: String
	}

	type User {
		email: String!
		name: String
		image: String
		accounts: [Account]
		created: Date
		modified: Date
	}

	type UserStats {
		feedCount: Int!
		feedViews: Int!
		feedFavourites: Int!
		channelsCount: Int!
		channelsFollowing: Int!
	}

	extend type Query {
		user: User!
		userStats: UserStats!
	}

	extend type Mutation {
		deleteAccount: Boolean
	}
`;
