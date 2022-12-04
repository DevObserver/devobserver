import { log } from '@devobserver/log';
import { Prisma } from '@prisma/client';

import { appNameSpace } from '../../../app';
import { Context } from '../../index';

type FeedsArgs = {
	filter: {
		where?: {
			channelId?: string;
			categoryId?: string;
			title?: {
				contains: string;
			};
			award?: {
				name: string;
			};
			category?: {
				name: string;
			};
		};
		take?: number;
		skip?: number;
		cursor?: number;
		orderBy?: {
			created?: 'asc' | 'desc';
		};
	};
	personalized?: boolean;
	saved?: boolean;
	viewed?: boolean;
};

export const feeds = async (
	parent: never,
	{ filter, personalized, saved, viewed }: FeedsArgs,
	{ user, db }: Context
) => {
	try {
		const query: Prisma.FeedFindManyArgs = {
			where: {
				...(filter && filter.where),
				...(filter.cursor && {
					index: {
						lt: filter.cursor || undefined,
					},
				}),
				...(saved && {
					userFeedSaved: {
						some: {
							userId: {
								equals: user.id,
							},
						},
					},
				}),
				...(viewed && {
					userFeedViewed: {
						some: {
							userId: {
								equals: user.id,
							},
						},
					},
				}),
				published: true,
			},
			orderBy: {
				index: 'desc',
			},
			take: (filter && filter.take) || 120,
			skip: (filter && filter.skip) || 0,
			include: {
				category: true,
				channel: true,
				type: true,
				userFeedViewed: {
					where: {
						userId: user.id,
					},
				},
				userFeedSaved: {
					where: {
						userId: user.id,
					},
				},
			},
		};

		if (personalized) {
			const userChannels = await db.userChannelFollowed.findMany({
				where: {
					userId: user.id,
				},
			});

			if (query.where && userChannels.length > 0) {
				query.where.channelId = {
					in: userChannels.map((item) => item.channelId),
				};
			}
		}

		let feeds = await db.feed.findMany(query);
		feeds = feeds.map((feed: any) => {
			feed.viewed = !!(feed.userFeedViewed && feed.userFeedViewed.length);
			feed.saved = !!(feed.userFeedSaved && feed.userFeedSaved.length);
			return feed;
		});

		return feeds;
	} catch (error) {
		log.error(appNameSpace, `Error happened while getting feeds: ${error}`);
		throw new Error('Something went wrong');
	}
};
