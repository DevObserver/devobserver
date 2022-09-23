import { feedResolver } from './feed.resolver';
import { feedTypeDef } from './feed.type';

export const feed = {
	typeDef: feedTypeDef,
	resolvers: feedResolver,
};
