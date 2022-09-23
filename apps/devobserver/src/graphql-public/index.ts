import { prisma } from '@devobserver/prisma';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';

import { app } from '../app';
import { schema } from './schema';

export interface PublicContext {
	db: PrismaClient;
}

export const graphqlPublic = async () => {
	const graphql = new ApolloServer({
		cache: 'bounded',
		...schema,
		context: (): PublicContext => {
			return { db: prisma };
		},
		debug: process.env.NODE_ENV !== 'production',
	});

	await graphql.start();

	graphql.applyMiddleware({
		app,
		path: '/api-public',
	});
};
