import * as fs from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';

import { config } from '../../config';

export type WelcomeNotification = {
	email: string;
};

export const welcomeNotification = async ({ email }: WelcomeNotification) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: true,
			auth: {
				user: config.smtpUser,
				pass: config.smtpPassword,
			},
		});

		const template = fs.readFileSync(
			path.resolve(__dirname, '..', '..', '..', 'shared', 'email-templates', 'welcome-email.html'),
			{ encoding: 'utf-8' }
		);

		await transporter.sendMail({
			from: config.smtpFrom,
			to: email,
			subject: 'Welcome to DevObserver',
			text: '',
			html: template,
		});

		return;
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		throw new Error('Error happened while sending email', error);
	}
};
