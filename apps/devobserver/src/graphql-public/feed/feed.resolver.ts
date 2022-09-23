import { log } from '@devobserver/log';
import { Prisma } from '@prisma/client';

import { appNameSpace } from '../../app';
import { PublicContext } from '../index';

type FeedsArgs = {
	filter: {
		where?: {
			award?: {
				name: string;
			};
			category?: {
				name: string;
			};
		};
		take?: number;
	};
};

export const feedResolver = {
	Query: {
		feeds: async (parent: never, { filter }: FeedsArgs, { db }: PublicContext) => {
			try {
				const query: Prisma.FeedFindManyArgs = {
					where: {
						...(filter && filter.where),
						published: true,
					},
					include: {
						category: true,
						channel: true,
						type: true,
					},
					orderBy: {
						index: 'desc',
					},
					take: filter && filter.take && filter.take > 120 ? 120 : (filter && filter.take) || 120,
					skip: 0,
				};

				return db.feed.findMany(query);
			} catch (error) {
				log.error(appNameSpace, `Error happened while getting public feeds: ${error}`);
				throw new Error('Something went wrong!');
			}
		},
	},
};
