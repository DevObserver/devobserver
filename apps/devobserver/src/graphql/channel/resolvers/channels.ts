import { Prisma } from '@prisma/client';

import { Context } from '../../index';

type ChannelsArgs = {
	filter: {
		where?: {
			categoryId?: string;
			name?: {
				contains?: string;
			};
			category?: {
				name: string;
			};
		};
		skip?: number;
		take?: number;
		orderBy?: {
			name?: 'asc' | 'desc';
		};
	};
};

export const channels = async (parent: never, { filter }: ChannelsArgs, { user, db }: Context) => {
	const query: Prisma.ChannelFindManyArgs = {
		...filter,
		include: {
			category: true,
			type: true,
			userChannelFollowed: {
				where: {
					userId: user.id,
				},
			},
		},
	};

	const channels = await db.channel.findMany(query);

	return channels.map((channel) => {
		return {
			...channel,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			favourite: !!(channel.userChannelFollowed && channel.userChannelFollowed.length),
		};
	});
};
