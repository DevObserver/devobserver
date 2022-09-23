import { prisma } from '@devobserver/prisma';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';

import { app } from '../app';

export const feedViews = () => {
	app.get('/g/:feedId', async (req: Request, res: Response) => {
		const { feedId } = req.params;
		let query: Prisma.FeedFindFirstArgs = {
			where: {
				id: feedId,
			},
		};

		if (req.user) {
			query = {
				...query,
				include: {
					userFeedViewed: {
						where: {
							userId: req.user.id,
						},
					},
				},
			};
		}

		const currentFeed: any = await prisma.feed.findFirst(query);

		if (!currentFeed) {
			res.redirect('/');
			return;
		}

		const isViewedByUser = currentFeed && currentFeed.userFeedViewed && currentFeed.userFeedViewed.length;

		if (req.user && !isViewedByUser) {
			await prisma.feed.update({
				where: {
					id: currentFeed.id,
				},
				data: {
					views: currentFeed.views !== null ? currentFeed.views + 1 : 0,
				},
			});

			await prisma.userFeedViewed.create({
				data: {
					feedId: currentFeed.id,
					userId: req.user.id,
				},
			});
		}

		res.redirect(currentFeed.url || '/');
	});
};
