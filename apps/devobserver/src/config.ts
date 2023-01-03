import * as dotenv from 'dotenv';
import env from 'env-var';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const config = {
	maintenance: env.get('MAINTENANCE').default('disabled').asString(),
	databaseUrl: env.get('DATABASE_URL').default('postgres://postgres:@localhost:5432/devobserver').asString(),
	databaseCA: env.get('DATABASE_CA').asString(),
	redisUrl: env.get('REDIS_URL').default('redis://localhost:6379').asString(),

	allowedOrigins: env.get('ALLOWED_ORIGINS').default('http://localhost:3000').asString(),
	cookieName: env.get('COOKIE_NAME').default('devobserver').asString(),
	cookieSecret: env.get('COOKIE_SECRET').default('devobserver').asString(),

	jwtIssuer: env.get('JWT_ISSUER').default('devobserver').asString(),
	jwtSecret: env.get('JWT_SECRET').default('devobserver').asString(),
	jwrSub: env.get('JWT_SUB').default('devobserver').asString(),

	iosClientAppRedirectUrl: env.get('IOS_CLIENT_APP_REDIRECT_URL').default('devobserver://').asString(),

	appleClientId: env.get('APPLE_CLIENT_ID').default('').asString(),
	appleTeamId: env.get('APPLE_TEAM_ID').default('').asString(),
	appleCallbackUrl: env.get('APPLE_CALLBACK_URL').default('').asString(),
	appleKeyId: env.get('APPLE_KEY_ID').default('').asString(),
	applePrivateKey: env.get('APPLE_PRIVATE_KEY').default('').asString(),

	githubClientId: env.get('GITHUB_CLIENT_ID').default('').asString(),
	githubClientSecret: env.get('GITHUB_CLIENT_SECRET').default('').asString(),
	githubCallbackUrl: env.get('GITHUB_CALLBACK_URL').default('').asString(),

	googleClientId: env.get('GOOGLE_CLIENT_ID').default('').asString(),
	googleClientSecret: env.get('GOOGLE_CLIENT_SECRET').default('').asString(),
	googleCallbackUrl: env.get('GOOGLE_CALLBACK_URL').default('').asString(),

	twitterConsumerKey: env.get('TWITTER_CONSUMER_KEY').default('').asString(),
	twitterConsumerSecret: env.get('TWITTER_CONSUMER_SECRET').default('').asString(),
	twitterCallbackUrl: env.get('TWITTER_CALLBACK_URL').default('').asString(),

	smtpHost: env.get('MAIL_SMTP_HOST').asString(),
	smtpPort: env.get('MAIL_SMTP_PORT').asPortNumber(),
	smtpUser: env.get('MAIL_SMTP_USER').asString(),
	smtpPassword: env.get('MAIL_SMTP_PASS').asString(),
	smtpFrom: env.get('MAIL_SMTP_SENDER').asString(),
};

export const REDIS_HOST = env.get('REDIS_HOST').required().asString();
export const REDIS_PORT = env.get('REDIS_PORT').required().asPortNumber();
export const REDIS_USER = env.get('REDIS_USER').required().asString();
export const REDIS_PASSWORD = env.get('REDIS_PASSWORD').asString();
