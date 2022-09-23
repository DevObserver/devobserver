import { gql } from 'apollo-server';

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
