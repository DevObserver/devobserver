import { Prisma } from '@prisma/client';

import { Context } from '../../index';

type FeedsSavedArgs = {
	orderBy?: string;
	orderDirection?: string;
	take?: number;
	skip?: number;
};

export const feedsSaved = async (parent: never, args: FeedsSavedArgs, { user, db }: Context) => {
	const query: Prisma.UserFindUniqueArgs = {
		where: {
			id: user.id,
		},
		include: {
			userFeedSaved: {
				include: {
					feed: {
						include: {
							category: true,
							channel: true,
							type: true,
						},
					},

					// take: args.take || 120,
					// skip: args.skip || 0,
				},
			},
		},
	};

	const userEntity: any = await db.user.findUnique(query);

	if (!userEntity) {
		return;
	}

	return userEntity.userFeedSaved.map((item: any) => item.feed);
};
