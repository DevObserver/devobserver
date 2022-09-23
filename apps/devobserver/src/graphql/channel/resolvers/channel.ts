import { Context } from '../../index';

type ChannelArgs = {
	id: string;
};

export const channel = async (parent: never, { id }: ChannelArgs, { user, db }: Context) => {
	const channel = await db.channel.findFirst({
		where: {
			id,
		},
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

	return {
		...channel,
		favourite: !!(channel.userChannelFollowed && channel.userChannelFollowed.length),
	};
};
