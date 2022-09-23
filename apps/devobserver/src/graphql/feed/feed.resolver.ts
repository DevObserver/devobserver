import { feedDelete } from './mutations/feed-delete';
import { feedOpen } from './mutations/feed-open';
import { feedSave } from './mutations/feed-save';
import { feeds } from './resolvers/feeds';
import { feedsSaved } from './resolvers/feeds-saved';

export const feedResolver = {
	Query: {
		feeds,
		feedsSaved,
	},
	Mutation: {
		feedDelete,
		feedOpen,
		feedSave,
	},
};
