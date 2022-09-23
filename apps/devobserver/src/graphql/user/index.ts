import { userResolver } from './user.resolver';
import { userTypeDef } from './user.type';

export const user = {
	typeDef: userTypeDef,
	resolvers: userResolver,
};
