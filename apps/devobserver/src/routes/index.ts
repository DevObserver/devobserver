import { feedViews } from './feed-views';
import { routesGuard } from './routes-guard';
import { staticFiles } from './static-files';
import { webApp } from './web-app';

export const routes = () => {
	if (process.env.NODE_ENV !== 'production') {
		staticFiles();
	}

	webApp();
	routesGuard();
	feedViews();
};
