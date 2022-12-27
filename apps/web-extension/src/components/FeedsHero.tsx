import React from 'react';

import { Feed } from '../types/GeneratedTypes';
import { VStack } from '../ui';
import { FeedCardHero } from './FeedCardHero';
import { SectionHeader } from './SectionHeader';

interface FeedsHeroProps {
	editorsChoiceFeeds: Feed[];
	featuredFeeds: Feed[];
}

export const FeedsHero: React.FC<FeedsHeroProps> = ({ editorsChoiceFeeds, featuredFeeds }) => {
	return (
		<VStack as="section" className="justify-center py-12">
			<SectionHeader title="Editor's Choice" subtitle="Hand picked, latest best feeds"></SectionHeader>

			<div className="grid gap-24 lg:grid-cols-2">
				<VStack>
					{editorsChoiceFeeds.map((feed: Feed) => (
						<FeedCardHero key={feed.id} feed={feed} variant="large" />
					))}
				</VStack>

				<div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-24">
					{featuredFeeds.map((feed: Feed) => (
						<FeedCardHero key={feed.id} feed={feed} variant="small" />
					))}
				</div>
			</div>
		</VStack>
	);
};
