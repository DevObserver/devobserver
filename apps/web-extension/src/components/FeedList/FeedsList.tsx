import React from 'react';

import { Feed } from '../../types/GeneratedTypes';
import { Flex, Heading, Text } from '../../ui';
import { FeedCard } from '../FeedCard/FeedCard';
import { heading, list } from './FeedsList.css';

interface FeedsListProps {
	title?: string;
	subtitle?: string;
	feeds: Feed[];
	toggleFeed?: (feed: Feed) => void;
}

export const FeedsList: React.FC<FeedsListProps> = ({ title, subtitle, feeds, toggleFeed }) => {
	return (
		<section>
			<Flex flexDirection="column" gap={8} mb={48}>
				{title && (
					<Heading variant="h1" as="h1" className={heading}>
						{title}
					</Heading>
				)}
				{subtitle && (
					<Text size="xLarge" opacity={0.5}>
						{subtitle}
					</Text>
				)}
			</Flex>

			{feeds && feeds.length ? (
				<div className={list}>
					{feeds.map((feed) => (
						<FeedCard key={feed.id} feed={feed} onToggle={toggleFeed} />
					))}
				</div>
			) : (
				<></>
			)}
		</section>
	);
};
