const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { MAIL } = require('../../config');

module.exports = (userEmail) => {
	let transporter = nodemailer.createTransport({
		host: MAIL.SMTP_HOST,
		port: MAIL.SMTP_PORT,
		secure: true,
		auth: {
			user: MAIL.SMTP_USER,
			pass: MAIL.SMTP_PASS,
		},
	});

	const emailTemplate = path.resolve(__dirname, 'welcome-email-template.html');

	fs.readFile(emailTemplate, { encoding: 'utf-8' }, (err, template) => {
		if (err) {
			console.log(err);
		}

		let mailOptions = {
			from: MAIL.SMTP_SENDER,
			to: userEmail,
			subject: 'Welcome to DevObserver',
			text: '',
			html: template,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			console.log('send email info', info);
			if (err) {
				console.log('send email error', error);
			}
		});
	});
};
