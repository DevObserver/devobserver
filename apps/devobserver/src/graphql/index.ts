import { prisma } from '@devobserver/prisma';
import { PrismaClient, User } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';

import { app } from '../app';
import { schema } from './schema';

export interface Context {
	user: User;
	db: PrismaClient;
}

export const graphql = async () => {
	const graphql = new ApolloServer({
		cache: 'bounded',
		...schema,
		context: ({ req }): Context => {
			if (!req.user) {
				throw new Error('Not authorized!');
			}

			return { user: req.user, db: prisma };
		},
		debug: process.env.NODE_ENV !== 'production',
	});

	await graphql.start();

	graphql.applyMiddleware({
		app,
		path: '/api',
	});
};
