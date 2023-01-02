import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { prisma } from '@devobserver/prisma';
import { PrismaClient, User } from '@prisma/client';
import { json } from 'body-parser';
import cors from 'cors';
import { GraphQLError } from 'graphql';

import { app } from '../app';
import { resolvers, typeDefs } from './schema';

export interface Context {
	user: User;
	db: PrismaClient;
}

export const graphql = async () => {
	const server = new ApolloServer<Context>({
		typeDefs,
		resolvers,
	});

	await server.start();

	app.use(
		'/api',
		cors<cors.CorsRequest>(),
		json(),
		expressMiddleware(server, {
			context: async ({ req }) => {
				if (!req.user) {
					throw new GraphQLError('Not authorized!');
				}

				return { user: req.user, db: prisma };
			},
		})
	);
};
