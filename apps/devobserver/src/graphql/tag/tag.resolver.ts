import { Context } from '../index';

export const tagResolver = {
	Query: {
		tags: async (parent: never, args: never, { db }: Context) => {
			return db.tag.findMany();
		},
	},
};
