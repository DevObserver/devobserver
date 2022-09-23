import { NextFunction, Response } from 'express';

export const maintenance = (isUnderMaintenance: boolean): any => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (isUnderMaintenance) {
			res
				.status(503)
				.json({ message: 'Error 503: Server is temporarily unavailable, please try again later' });
		}

		next();
	};
};
