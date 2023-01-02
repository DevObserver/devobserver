import gql from 'graphql-tag';

export const feedTypeDef = gql`
	type Feed {
		id: ID!
		index: Int!
		title: String!
		url: String!
		image: String!
		views: Int!
		likes: Int!
		type: Type!
		awardId: ID!
		channel: Channel!
		categoryId: ID!
		category: Category!
		created: Date!
		modified: Date
	}

	input FeedWhereAwardFilter {
		name: String
	}

	input FeedWhereCategoryFilter {
		name: String
	}

	input FeedsWhereFilter {
		categoryId: ID
		award: FeedWhereAwardFilter
		category: FeedWhereCategoryFilter
	}

	input FeedsFilter {
		where: FeedsWhereFilter
		take: Int
	}

	extend type Query {
		feeds(filter: FeedsFilter): [Feed]!
	}
`;
