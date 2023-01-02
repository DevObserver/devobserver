import gql from 'graphql-tag';

export const typeTypeDef = gql`
	type Type {
		id: ID!
		name: String!
		created: Date
		modified: Date
	}

	extend type Query {
		types: [Type!]!
	}
`;
