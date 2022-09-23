import { gql } from 'apollo-server';

import { award } from '../graphql/award';
import { category } from '../graphql/category';
import { channel } from '../graphql/channel';
import { DateScalar } from '../graphql/scalars/date';
import { type } from '../graphql/type';
import { feed } from './feed';

const typeDef = gql`
	type Query
	type Mutation
`;

export const schema = {
	typeDefs: [
		typeDef,
		DateScalar.typeDef,
		award.typeDef,
		category.typeDef,
		channel.typeDef,
		feed.typeDef,
		type.typeDef,
	],
	resolvers: [DateScalar.resolvers, feed.resolvers],
};
