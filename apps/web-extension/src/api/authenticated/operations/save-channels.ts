import { gql } from '@apollo/client';

import { ChannelFragment } from '../fragments/channels';

export const SAVE_CHANNELS = gql`
	${ChannelFragment}

	mutation SaveChannels($channels: [ID!]!) {
		channels(channels: $channels) {
			...ChannelFull
		}
	}
`;
