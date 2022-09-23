import { prisma } from '@devobserver/prisma';

export const getNewFeeds = async ({ channel, feeds }: any) => {
	const feedsTitles = feeds.map((feed: any) => ({
		url: {
			contains: feed.url,
		},
	}));

	const query = {
		where: {
			OR: feedsTitles,
			AND: {
				channelId: {
					equals: channel.id,
				},
			},
		},
		select: {
			url: true,
		},
	};

	const foundFeeds = await prisma.feed.findMany(query);
	const foundFeedsTitle = foundFeeds.map((feed) => feed.url);

	return feeds.filter((feed: any) => foundFeedsTitle.indexOf(feed.url) < 0);
};
