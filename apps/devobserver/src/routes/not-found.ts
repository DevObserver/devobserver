import { Request, Response } from 'express';

import { app } from '../app';

export const notFound = () => {
	app.all('*', (req: Request, res: Response) => {
		res.status(200).send('<h1>This is DevObserver</h1>');
	});
};
