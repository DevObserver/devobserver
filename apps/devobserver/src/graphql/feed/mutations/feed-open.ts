import { Context } from '../../index';

type FeedOpenArgs = {
	id: string;
};

export const feedOpen = async (parent: never, { id }: FeedOpenArgs, { user, db }: Context) => {
	const feedView = await db.userFeedViewed.findFirst({
		where: { userId: user.id, feedId: id },
		include: {
			feed: true,
		},
	});

	if (!feedView) {
		return;
	}

	await db.userFeedViewed.create({
		data: { userId: user.id, feedId: id },
	});

	return db.feed.update({
		where: {
			id: id,
		},
		data: {
			views: feedView.feed.views ? feedView.feed.views + 1 : 0,
		},
		include: {
			category: true,
			channel: true,
			type: true,
		},
	});
};
