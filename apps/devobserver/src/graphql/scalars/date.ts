import { gql } from 'apollo-server';
import { GraphQLScalarType } from 'graphql';

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
