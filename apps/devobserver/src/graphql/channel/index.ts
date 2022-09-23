import { channelResolver } from './channel.resolver';
import { channelTypeDef } from './channel.type';

export const channel = {
	typeDef: channelTypeDef,
	resolvers: channelResolver,
};
