import { Context } from '../index';

export const categoryResolver = {
	Query: {
		categories: async (parent: never, args: never, { db }: Context) => {
			return db.category.findMany();
		},
	},
};
