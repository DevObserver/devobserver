import React from 'react';

import { Feed } from '../types/GeneratedTypes';
import { CardGrid } from '../ui';
import { FeedCard } from './FeedCard';
import { SectionHeader } from './SectionHeader';

interface FeedsListProps {
	title?: string;
	subtitle?: string;
	feeds: Feed[];
	toggleFeed?: (feed: Feed) => void;
}

export const FeedsList: React.FC<FeedsListProps> = ({ title, subtitle, feeds, toggleFeed }) => {
	return (
		<section>
			<SectionHeader title={title} subtitle={subtitle} />

			{feeds && feeds.length ? (
				<CardGrid>
					{feeds.map((feed) => (
						<FeedCard key={feed.id} feed={feed} onToggle={toggleFeed} />
					))}
				</CardGrid>
			) : (
				<></>
			)}
		</section>
	);
};
