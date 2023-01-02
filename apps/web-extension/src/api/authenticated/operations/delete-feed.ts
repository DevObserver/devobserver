import { gql } from '@apollo/client';

export const DELETE_FEED = gql`
	mutation deleteFeed($id: ID!) {
		feedDelete(id: $id) {
			id
		}
	}
`;
