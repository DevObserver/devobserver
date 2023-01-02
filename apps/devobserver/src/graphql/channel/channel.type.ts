import gql from 'graphql-tag';

export const channelTypeDef = gql`
	type Channel {
		id: ID!
		name: String!
		url: String!
		image: String!
		coverImage: String
		description: String!
		color: String
		feedImage: String
		favourite: Boolean!
		category: Category!
		type: Type
		created: Date
		modified: Date
	}

	enum ChannelOrderDirection {
		asc
		desc
	}

	input ChannelContains {
		contains: String
	}

	input ChannelCategoryFilter {
		name: String
	}

	input ChannelWhereFilter {
		categoryId: ID
		category: ChannelCategoryFilter
		name: ChannelContains
	}

	input ChannelOrderBy {
		name: ChannelOrderDirection
	}

	input ChannelFilter {
		where: ChannelWhereFilter
		take: Int
		skip: Int
		orderBy: ChannelOrderBy
	}

	extend type Query {
		channel(id: ID!): Channel
		channels(filter: ChannelFilter): [Channel]!
	}

	extend type Mutation {
		channels(channels: [ID!]!): [Channel!]!
		saveChannels(channels: [ID!]!): [Channel!]!
		followChannel(id: ID!): Channel!
		unfollowChannel(id: ID!): Channel!
	}
`;
