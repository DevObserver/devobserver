import * as notifications from './notification';

export const queues = {
	[notifications.queueName]: notifications.queue,
};

export const closeAllQueues = async () => Object.values(queues).forEach(async (q) => await q.close());
