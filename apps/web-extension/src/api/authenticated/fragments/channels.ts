import { gql } from '@apollo/client';

export const ChannelFragment = gql`
	fragment ChannelFull on Channel {
		id
		name
		url
		favourite
		image
		category {
			id
			name
		}
		coverImage
		description
		color
		created
		modified
	}
`;
