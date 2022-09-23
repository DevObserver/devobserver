import { categoryResolver } from './category.resolver';
import { categoryTypeDef } from './category.type';

export const category = {
	typeDef: categoryTypeDef,
	resolvers: categoryResolver,
};
