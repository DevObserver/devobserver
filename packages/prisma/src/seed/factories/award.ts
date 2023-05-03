import { prisma } from '../lib/prisma';

const awards = ['Highlighted', "Editor's Choice", 'Hot', 'Regular', 'Top', 'Featured'];

export const createAwards = () => {
	return Promise.all(
		awards.map(async (award) => {
			return prisma.award.create({
				data: {
					name: award,
				},
			});
		})
	);
};
