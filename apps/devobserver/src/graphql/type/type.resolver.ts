import { Context } from '../index';

export const typeResolver = {
	Query: {
		types: async (parent: never, args: never, { db }: Context) => {
			return db.type.findMany();
		},
	},
};
