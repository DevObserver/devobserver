import { log } from '@devobserver/log';
import { prisma } from '@devobserver/prisma';
import { Queue, Worker } from 'bullmq';

import { connection } from '../../utils/connection';
import { rssScraperQueue } from '../rss-scraper';

const logNameSpace = 'RssObserver';

export const queueName = 'cron';
export const cronQueue = new Queue(queueName, {
	connection,
	defaultJobOptions: {
		removeOnComplete: true,
	},
});

const cronWorker = new Worker(
	queueName,
	async () => {
		const award = await prisma.award.findUnique({
			where: {
				name: 'Regular',
			},
		});
		const channels = await prisma.channel.findMany({
			where: {
				enabled: true,
			},
			include: {
				category: true,
				type: true,
			},
		});

		const rssJobs = channels.map((channel) => ({
			name: `channel: ${channel.name}`,
			data: {
				channel,
				award,
			},
			opts: {
				jobId: channel.name,
			},
		}));

		await rssScraperQueue.addBulk(rssJobs);
		return;
	},
	{ connection }
);

cronWorker.on('completed', (job) => {
	log.info(logNameSpace, `${queueName} - ${job.id} has been completed`);
});

cronWorker.on('failed', (job, error) => {
	log.error(logNameSpace, `${queueName} - ${job?.id} has failed! ${error.message}`);
});
