import { NextFunction, Request, Response } from 'express';
import path from 'path';

import { app } from '../app';

export const errorHandler = () => {
	app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
		if (err) {
			return res.status(500).sendFile(path.join(__dirname, '..', 'public', 'error.html'));
		}

		next();
	});
};
