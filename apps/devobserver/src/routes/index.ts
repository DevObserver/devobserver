import { feedViews } from './feed-views';
import { routesGuard } from './routes-guard';
import { staticFiles } from './static-files';

export const routes = () => {
	if (process.env.NODE_ENV !== 'production') {
		staticFiles();
	}
	routesGuard();
	feedViews();
};
