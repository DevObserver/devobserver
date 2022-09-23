import { gql } from '@apollo/client';

import { ChannelFragment } from '../fragments/channels';

export const GET_CHANNELS = gql`
	${ChannelFragment}

	query ChannelsQuery {
		channels(filter: { orderBy: { name: asc } }) {
			...ChannelFull
		}
	}
`;
