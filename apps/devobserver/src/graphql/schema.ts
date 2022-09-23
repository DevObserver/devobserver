import { gql } from 'apollo-server';

import { award } from './award';
import { category } from './category';
import { channel } from './channel';
import { feed } from './feed';
import { DateScalar } from './scalars/date';
import { tag } from './tag';
import { type } from './type';
import { user } from './user';

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
		tag.typeDef,
		type.typeDef,
		user.typeDef,
	],
	resolvers: [
		DateScalar.resolvers,
		award.resolvers,
		category.resolvers,
		channel.resolvers,
		feed.resolvers,
		tag.resolvers,
		type.resolvers,
		user.resolvers,
	],
};
