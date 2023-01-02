import { GraphQLScalarType } from 'graphql';
import gql from 'graphql-tag';

const dateScalar = new GraphQLScalarType({
	name: 'Date',
	description: 'Date custom scalar type',
	serialize(value: any) {
		return new Date(value);
	},
});

const typeDef = gql`
	scalar Date
`;

const resolvers = {
	Date: dateScalar,
};

export const DateScalar = {
	typeDef,
	resolvers,
};
