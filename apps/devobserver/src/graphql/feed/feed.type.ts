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
		channelId: ID!
		channel: Channel!
		categoryId: ID!
		category: Category!
		viewed: Boolean
		saved: Boolean
		created: Date!
		modified: Date
	}

	enum FeedOrderDirection {
		asc
		desc
	}

	input FeedWhereAwardFilter {
		name: String
	}

	input FeedWhereCategoryFilter {
		name: String
	}

	input FeedWhereTitleFilter {
		contains: String
	}

	input FeedWhereFilter {
		awardId: ID
		channelId: ID
		categoryId: ID
		award: FeedWhereAwardFilter
		category: FeedWhereCategoryFilter
		title: FeedWhereTitleFilter
	}

	input FeedOrderBy {
		created: FeedOrderDirection = "desc"
		index: FeedOrderDirection = "desc"
	}

	input FeedsFilter {
		where: FeedWhereFilter
		take: Int = 120
		skip: Int = 0
		cursor: Int
		orderBy: FeedOrderBy
	}

	extend type Query {
		feeds(filter: FeedsFilter, personalized: Boolean, saved: Boolean, viewed: Boolean): [Feed]!
		feedsSaved(
			take: Int
			skip: Int
			cursor: Int
			orderBy: String
			orderDirection: String
			categoryId: ID
		): [Feed!]!
	}

	extend type Mutation {
		feedSave(id: ID!): Feed!
		feedDelete(id: ID!): Feed!
		feedOpen(id: ID!): Feed!
	}
`;
