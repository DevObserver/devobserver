import { Context } from '../../index';

type FeedSaveArgs = {
	id: string;
};

export const feedSave = async (parent: never, { id }: FeedSaveArgs, { user, db }: Context) => {
	const feed = await db.feed.findFirst({
		where: {
			id: id,
		},
	});

	const userFeeds = await db.userFeedSaved.findFirst({
		where: {
			userId: user.id,
			feedId: id,
		},
	});

	if (!userFeeds) {
		await db.userFeedSaved.create({
			data: {
				userId: user.id,
				feedId: id,
			},
		});
	}

	return feed;
};
