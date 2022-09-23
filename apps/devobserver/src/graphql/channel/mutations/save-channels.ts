import type { Channel } from '@prisma/client';

import { Context } from '../../index';

type SaveChannelsArgs = {
	channels: string[];
};

interface UserChannels extends Channel {
	favourite: boolean;
}

export const saveChannels = async (parent: never, args: SaveChannelsArgs, { user, db }: Context) => {
	await db.userChannelFollowed.deleteMany({
		where: {
			userId: user.id,
		},
	});

	const favouriteChannels = args.channels.map((channel) => {
		return {
			userId: user.id,
			channelId: channel,
		};
	});

	await db.userChannelFollowed.createMany({
		data: favouriteChannels,
	});

	const channels: Channel[] = await db.channel.findMany({
		include: {
			category: true,
			type: true,
			userChannelFollowed: {
				where: {
					userId: user.id,
				},
			},
		},
	});

	const userChannels: UserChannels[] = channels.map((channel) => {
		return {
			...channel,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			favourite: !!(channel.userChannelFollowed && channel.userChannelFollowed.length),
		};
	});

	return userChannels;
};
