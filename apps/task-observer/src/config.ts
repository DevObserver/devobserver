import * as dotenv from 'dotenv';
import env from 'env-var';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const MAINTENANCE = env.get('MAINTENANCE').default('disabled').required().asString();

export const REDIS_HOST = env.get('REDIS_HOST').required().asString();
export const REDIS_PORT = env.get('REDIS_PORT').required().asPortNumber();
export const REDIS_USER = env.get('REDIS_USER').required().asString();
export const REDIS_PASSWORD = env.get('REDIS_PASSWORD').asString();

export const OBJECT_STORAGE_BUCKET = env.get('OBJECT_STORAGE_BUCKET').required().asString();
export const OBJECT_STORAGE_ENDPOINT = env.get('OBJECT_STORAGE_ENDPOINT').required().asString();
export const OBJECT_STORAGE_ACCESS_KEY_ID = env.get('OBJECT_STORAGE_ACCESS_KEY_ID').required().asString();
export const OBJECT_STORAGE_SECRET_ACCESS_KEY = env
	.get('OBJECT_STORAGE_SECRET_ACCESS_KEY')
	.required()
	.asString();
