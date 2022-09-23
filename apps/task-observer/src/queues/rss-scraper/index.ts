import { log } from '@devobserver/log';
import { Prisma } from '@prisma/client';
import { Job, Queue, Worker } from 'bullmq';

import { connection } from '../../utils/connection';
import * as feedProcess from '../channel-flow';
import { getNewFeeds } from './get-new-feeds';
import { rssParser } from './rss-parser';

const channelWithInclude = Prisma.validator<Prisma.ChannelFindManyArgs>()({
	include: {
		category: true,
		type: true,
	},
});

type rssScrapeJobData = {
	channel: Prisma.ChannelGetPayload<typeof channelWithInclude>;
	award: any;
};

const logNameSpace = 'RssObserver';

export const queueName = 'rssScraper';
export const rssScraperQueue = new Queue(queueName, {
	connection,
	defaultJobOptions: {
		removeOnComplete: true,
		removeOnFail: true,
	},
});

const rssScraperWorker = new Worker(
	queueName,
	async (job: Job<rssScrapeJobData, string, string>): Promise<string> => {
		const channel = job.data.channel;
		const award = job.data.award;
		const rssData: any = await rssParser(channel, award);
		const newFeeds = await getNewFeeds({ channel: channel, feeds: rssData.feeds });

		if (!newFeeds.length) {
			return '0';
		}

		const children = newFeeds.map((feed: any) => ({
			name: feed.title,
			queueName: 'feeds',
			data: {
				channel: channel,
				feed,
			},
			opts: {
				removeOnComplete: true,
				removeOnFail: true,
			},
		}));

		await feedProcess.channelFlow.add({
			name: 'channel',
			queueName: feedProcess.queueName,
			data: {
				...channel,
				rssHash: rssData.rssHash,
			},
			children,
			opts: {
				removeOnComplete: true,
				removeOnFail: true,
			},
		});

		return `${newFeeds.length}`;
	},
	{
		connection,
	}
);

rssScraperWorker.on('completed', (job) => {
	log.info(logNameSpace, `${queueName} - ${job.id} has been completed`);
});

rssScraperWorker.on('failed', (job, error) => {
	log.error(logNameSpace, `${queueName} - ${job.id} has failed! ${error.message}`);
});
