import { gql } from 'apollo-server';

export const categoryTypeDef = gql`
	type Category {
		id: ID!
		name: String!
		created: Date
		modified: Date
	}

	extend type Query {
		categories: [Category!]!
	}
`;
