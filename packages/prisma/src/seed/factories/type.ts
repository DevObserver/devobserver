import { prisma } from '../lib/prisma';

const types = ['text', 'video'];

export const createTypes = () => {
	return Promise.all(
		types.map(async (type) => {
			return prisma.type.create({
				data: {
					name: type,
				},
			});
		})
	);
};
