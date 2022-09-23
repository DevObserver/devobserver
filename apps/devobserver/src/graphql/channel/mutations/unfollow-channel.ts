import { Context } from '../../index';

type UnfollowChannelArgs = {
	id: string;
};

export const unfollowChannel = async (parent: never, args: UnfollowChannelArgs, { user, db }: Context) => {
	const channel = await db.channel.findUnique({
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

	await db.userChannelFollowed.deleteMany({
		where: {
			userId: user.id,
			channelId: args.id,
		},
	});

	return {
		...channel,
		favourite: !!(channel.userChannelFollowed && channel.userChannelFollowed.length),
	};
};
