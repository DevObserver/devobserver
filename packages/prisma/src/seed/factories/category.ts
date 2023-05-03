import { prisma } from '../lib/prisma';

const categories = ['Tech', 'Joke', 'Programming', 'Releases'];

export const createCategories = () => {
	return Promise.all(
		categories.map(async (category) => {
			return prisma.category.create({
				data: {
					name: category,
				},
			});
		})
	);
};
