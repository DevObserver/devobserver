import * as dotenv from 'dotenv';
import env from 'env-var';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const MAINTENANCE = env.get('MAINTENANCE').default('disabled').required().asString();

export const ALLOWED_ORIGINS = env.get('ALLOWED_ORIGINS').required().asString();
export const COOKIE_NAME = env.get('COOKIE_NAME').required().asString();
export const COOKIE_SECRET = env.get('COOKIE_SECRET').required().asString();
export const DATABASE_URL = env.get('DATABASE_URL').required().asString();
export const DATABASE_CA = env.get('DATABASE_CA').asString();
export const IOS_CLIENT_APP_REDIRECT_URL = env.get('IOS_CLIENT_APP_REDIRECT_URL').required().asString();
export const JWT_ISSUER = env.get('JWT_ISSUER').required().asString();
export const JWT_SECRET = env.get('JWT_SECRET').required().asString();
export const JWT_SUB = env.get('JWT_SUB').required().asString();

export const APPLE = {
	APPLE_CLIENT_ID: env.get('APPLE_CLIENT_ID').required().asString(),
	APPLE_TEAM_ID: env.get('APPLE_TEAM_ID').required().asString(),
	APPLE_CALLBACK_URL: env.get('APPLE_CALLBACK_URL').required().asString(),
	APPLE_KEY_ID: env.get('APPLE_KEY_ID').required().asString(),
	APPLE_PRIVATE_KEY: env.get('APPLE_PRIVATE_KEY').required().asString(),
};
export const GITHUB = {
	GITHUB_CLIENT_ID: env.get('GITHUB_CLIENT_ID').required().asString(),
	GITHUB_CLIENT_SECRET: env.get('GITHUB_CLIENT_SECRET').required().asString(),
	GITHUB_CALLBACK_URL: env.get('GITHUB_CALLBACK_URL').required().asString(),
};
export const GOOGLE = {
	GOOGLE_CLIENT_ID: env.get('GOOGLE_CLIENT_ID').required().asString(),
	GOOGLE_CLIENT_SECRET: env.get('GOOGLE_CLIENT_SECRET').required().asString(),
	GOOGLE_CALLBACK_URL: env.get('GOOGLE_CALLBACK_URL').required().asString(),
};
export const TWITTER = {
	TWITTER_CALLBACK_URL: env.get('TWITTER_CALLBACK_URL').required().asString(),
	TWITTER_CONSUMER_KEY: env.get('TWITTER_CONSUMER_KEY').required().asString(),
	TWITTER_CONSUMER_SECRET: env.get('TWITTER_CONSUMER_SECRET').required().asString(),
};

export const MAIL = {
	SMTP_HOST: env.get('MAIL_SMTP_HOST').required().asString(),
	SMTP_PORT: env.get('MAIL_SMTP_PORT').required().asString(),
	SMTP_USER: env.get('MAIL_SMTP_USER').required().asString(),
	SMTP_PASS: env.get('MAIL_SMTP_PASS').required().asString(),
	SMTP_SENDER: env.get('MAIL_SMTP_SENDER').required().asString(),
};
