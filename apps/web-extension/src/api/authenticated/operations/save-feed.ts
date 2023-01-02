import { gql } from '@apollo/client';

// import { FeedFragment } from '../fragments/feeds';

export const SAVE_FEED = gql`
	mutation saveFeed($id: ID!) {
		feedSave(id: $id) {
			id
		}
	}
`;
