import express from 'express';
import path from 'path';

import { app } from '../app';

export const webApp = () => {
	const publicPath = path.join(__dirname, '..', 'public');
	app.use(express.static(publicPath));

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
	});
};
