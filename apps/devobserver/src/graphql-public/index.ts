import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { prisma } from '@devobserver/prisma';
import { PrismaClient } from '@prisma/client';
import { json } from 'body-parser';
import cors from 'cors';

import { app } from '../app';
import { resolvers, typeDefs } from './schema';

export interface PublicContext {
	db: PrismaClient;
}

export const graphqlPublic = async () => {
	const server = new ApolloServer<PublicContext>({
		typeDefs,
		resolvers,
	});

	await server.start();

	app.use(
		'/api-public',
		cors<cors.CorsRequest>(),
		json(),
		expressMiddleware(server, {
			context: async () => {
				return { db: prisma };
			},
		})
	);
};
