import { Prisma } from '@prisma/client';

import { Context } from '../index';

export const userResolver = {
	Query: {
		user: async (parent: never, args: never, { user, db }: Context) => {
			return db.user.findFirst({
				where: { id: user.id },
				select: {
					id: true,
					email: true,
					name: true,
					image: true,
					created: true,
					modified: true,
					accounts: {
						select: {
							id: true,
							provider: true,
							displayName: true,
							userName: true,
						},
					},
				},
			});
		},
		userStats: async (parent: never, args: never, { user, db }: Context) => {
			const result: any = await db.$queryRaw(
				Prisma.sql`SELECT
					(SELECT COUNT(id) FROM feed) AS "feedCount",
					(SELECT COUNT(id) FROM "userFeedViewed" WHERE "userId" = ${user.id}) AS "feedViews",
					(SELECT COUNT(id) FROM "userFeedSaved" WHERE "userId" = ${user.id}) AS "feedFavourites",
					(SELECT COUNT(id) FROM "channel" WHERE enabled = TRUE) AS "channelsCount",
					(SELECT COUNT(id) FROM "userChannelFollowed" WHERE "userId" = ${user.id}) AS "channelsFollowing"`
			);

			return {
				feedCount: parseInt(result[0].feedCount),
				feedViews: parseInt(result[0].feedViews),
				feedFavourites: parseInt(result[0].feedFavourites),
				channelsCount: parseInt(result[0].channelsCount),
				channelsFollowing: parseInt(result[0].channelsFollowing),
			};
		},
	},
	Mutation: {
		deleteAccount: async (parent: never, args: never, { user, db }: Context) => {
			await db.user.delete({
				where: { id: user.id },
			});

			return true;
		},
	},
};
