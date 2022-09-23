import express from 'express';
import path from 'path';

import { app } from '../app';

export const staticFiles = () => {
	const publicPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public');

	app.use(express.static(publicPath));
};
