import { log } from '@devobserver/log';

import { MAINTENANCE } from './config';
import { cronQueue } from './queues/cron';

const logNameSpace = 'TaskObserver';

(async () => {
	log.info(logNameSpace, `Starting rss observer in ${process.env.NODE_ENV} mode!`);

	if (MAINTENANCE !== 'enabled') {
		await cronQueue.add(
			'',
			{},
			{
				// repeat: {
				// 	pattern: '*/60 * * * *',
				// },
			}
		);
	}
})();
