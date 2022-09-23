import { gql } from 'apollo-server';

export const awardTypeDef = gql`
	type Award {
		id: ID!
		name: String!
		created: Date
		modified: Date
	}

	extend type Query {
		awards: [Award!]!
	}
`;
