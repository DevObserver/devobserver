import { Context } from '../../index';

type FollowChannelArgs = {
	id: string;
};

export const followChannel = async (parent: never, args: FollowChannelArgs, { user, db }: Context) => {
	const channel = await db.channel.findFirst({
		where: {
			id: args.id,
		},
		rejectOnNotFound: false,
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

	if (!channel) {
		return;
	}

	const userChannels = await db.userChannelFollowed.findFirst({
		where: {
			userId: user.id,
			channelId: args.id,
		},
		rejectOnNotFound: false,
	});

	if (!userChannels) {
		await db.userChannelFollowed.create({
			data: {
				userId: user.id,
				channelId: args.id,
			},
		});
	}

	return {
		...channel,
		favourite: !!(channel.userChannelFollowed && channel.userChannelFollowed.length),
	};
};
