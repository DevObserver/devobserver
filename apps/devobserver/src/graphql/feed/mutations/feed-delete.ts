import { Context } from '../../index';

type FeedDeleteArgs = {
	id: string;
};

export const feedDelete = async (parent: never, { id }: FeedDeleteArgs, { user, db }: Context) => {
	const feed = await db.feed.findFirst({
		where: {
			id: id,
		},
		rejectOnNotFound: false,
	});

	await db.userFeedSaved.deleteMany({
		where: {
			userId: user.id,
			feedId: id,
		},
	});

	return feed;
};
