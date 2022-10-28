import { log } from '@devobserver/log';
import { Job, Queue, Worker } from 'bullmq';

import { connection } from '../connection';
import { WelcomeNotification, welcomeNotification } from './welcome-notification';

const nameSpace = 'Notification Queue';

export const queueName = 'notification';

export enum NOTIFICATION_TYPE {
	WELCOME = 'welcomeNotificationEmail',
}

type NotificationJobData = WelcomeNotification;

export const queue = new Queue(queueName, {
	connection,
	defaultJobOptions: {
		attempts: 3,
		removeOnComplete: true,
	},
});

export const worker = new Worker(
	queueName,
	async (job: Job<NotificationJobData, void, NOTIFICATION_TYPE>) => {
		switch (job.name) {
			case NOTIFICATION_TYPE.WELCOME:
				await welcomeNotification(job.data);
				log.info(nameSpace, 'Welcome email has been sent');
				break;
			default:
				log.warning(nameSpace, 'Unknown notification job');
				return;
		}
	},
	{ connection }
);

export const close = async () => {
	await queue.close();
	await worker.close();
};
