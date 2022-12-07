import React from 'react';

import { Feed } from '../../types/GeneratedTypes';
import { Box, Flex, Heading, Text } from '../../ui';
import { FeedCard } from '../FeedCard/FeedCard';
import { titleLine } from '../FeedList/FeedsList.css';
import { feedCard, imageWrapper } from '../FeedsHero/FeedsHero.css';
import { grid } from './FeaturedFeeds.css';

interface FeaturedFeedsProps {
	feeds: Feed[];
}

export const FeaturedFeeds: React.FC<FeaturedFeedsProps> = ({ feeds }) => {
	return (
		<section>
			<Box mb={24}>
				<Flex alignItems="center" gap={24}>
					<Heading as="h3" variant="h3">
						Featured
					</Heading>
					<div className={titleLine}></div>
				</Flex>

				<Text size="large" opacity={0.5}>
					Latest feeds worth to see
				</Text>
			</Box>

			<div className={grid}>
				{feeds.map((feed: Feed) => (
					<FeedCard
						className={feedCard}
						imageWrapperClassName={imageWrapper}
						key={feed.id}
						feed={feed}
						variant="medium"
					/>
				))}
			</div>
		</section>
	);
};
