import gql from 'graphql-tag';

export const tagTypeDef = gql`
	type Tag {
		id: ID!
		name: String!
		created: Date
		modified: Date
	}

	extend type Query {
		tags: [Tag!]!
	}
`;
