import { prisma } from '../lib/prisma';
import channels from './channels.json';

export const createChannels = (categories: any, types: any) => {
	return Promise.all(
		channels.map(async (channel) => {
			const category = categories.find((category: any) => category.name === channel.categoryName);
			const type = types.find((type: any) => type.name === channel.typeName);

			return prisma.channel.create({
				data: {
					name: channel.name,
					description: channel.description,
					image: channel.image,
					url: channel.url,
					rss: channel.rss,
					categoryId: category.id,
					typeId: type.id,
				},
			});
		})
	);
};
