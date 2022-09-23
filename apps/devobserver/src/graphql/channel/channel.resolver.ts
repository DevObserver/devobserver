import { followChannel } from './mutations/follow-channel';
import { saveChannels } from './mutations/save-channels';
import { unfollowChannel } from './mutations/unfollow-channel';
import { channel } from './resolvers/channel';
import { channels } from './resolvers/channels';

export const channelResolver = {
	Query: {
		channel,
		channels,
	},
	Mutation: {
		channels: saveChannels,
		saveChannels,
		followChannel,
		unfollowChannel,
	},
};
