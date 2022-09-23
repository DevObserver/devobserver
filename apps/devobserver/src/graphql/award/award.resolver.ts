import { Context } from '../index';

export const awardResolver = {
	Query: {
		awards: async (parent: never, args: never, { db }: Context) => {
			return db.award.findMany();
		},
	},
};
