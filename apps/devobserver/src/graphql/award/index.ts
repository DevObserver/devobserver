import { awardResolver } from './award.resolver';
import { awardTypeDef } from './award.type';

export const award = {
	typeDef: awardTypeDef,
	resolvers: awardResolver,
};
