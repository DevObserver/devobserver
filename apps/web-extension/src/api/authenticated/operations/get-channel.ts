import { gql } from '@apollo/client';

import { ChannelFragment } from '../fragments/channels';
import { FeedFragment } from '../fragments/feeds';

export const GET_CHANNEL = gql`
	${ChannelFragment}
	${FeedFragment}

	query ChannelQuery($channelId: ID!) {
		channel(id: $channelId) {
			...ChannelFull
		}

		feeds(filter: { where: { channelId: $channelId }, take: 48 }) {
			...FeedFull
		}
	}
`;
