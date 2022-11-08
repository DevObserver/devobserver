import { log } from '@devobserver/log';
import { prisma } from '@devobserver/prisma';
import { FlowProducer, Queue, Worker } from 'bullmq';

import { connection } from '../../utils/connection';
import { CATEGORIES } from '../../utils/constants';
import { getFeedImage } from './get-feed-image';
import { saveImage } from './save-image';

const logNameSpace = 'RssObserver';

export const queueName = 'channelFlow';
export const channelFlow = new FlowProducer({ connection });
export const channelFlowQueue = new Queue(queueName, {
	connection,
	defaultJobOptions: {
		attempts: 3,
	},
});

const channelFlowWorker = new Worker(
	queueName,
	async (job) => {
		try {
			const childrenValues = await job.getChildrenValues();
			const feedsJobData = Object.values(childrenValues);
			const feeds = feedsJobData.map((item) => {
				return item.feed;
			});

			const createdFeeds = await prisma.feed.createMany({ data: feeds, skipDuplicates: true });
			await prisma.channel.update({
				where: { id: job.data.id },
				data: { rssHash: job.data.rssHash },
			});

			log.info(
				logNameSpace,
				`${queueName} - ${job.data.name} has been completed with ${createdFeeds.count} new feeds`
			);
			return;
		} catch (error) {
			log.error(logNameSpace, `${queueName} - ${job.data.name} has failed! ${error}`);
			throw new Error(`${error}`);
		}
	},
	{
		connection,
	}
);

const feedWorker = new Worker(
	'feeds',
	async (job) => {
		let image = null;
		let feedImage;
		const feed = job.data.feed;

		if (job.data.channel.category.name === CATEGORIES.releases) {
			return job.data;
		}

		try {
			feedImage = await getFeedImage(feed);

			if (feedImage) {
				image = await saveImage(feed, feedImage);
			}
		} catch (e) {
			log.error(logNameSpace, `Error happened while processing '${job.data.title}' feed, ${e}`);
		}

		if (image) {
			await job.update({
				...job.data,
				feed: {
					...feed,
					image,
				},
			});
		}

		return job.data;
	},
	{
		connection,
		concurrency: 1,
	}
);

feedWorker.on('failed', (job, error) => {
	log.error(logNameSpace, `${queueName} - ${job.id} has failed! ${error.message}`);
});

channelFlowWorker.on('error', (failedReason) => {
	log.error(logNameSpace, `${queueName} - ${failedReason}`);
});
