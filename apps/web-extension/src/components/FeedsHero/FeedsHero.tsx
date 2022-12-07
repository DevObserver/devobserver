import React from 'react';

import { Feed } from '../../types/GeneratedTypes';
import { Box, Flex, Heading, Text } from '../../ui';
import { FeedCardHero } from '../FeedCardHero/FeedCardHero';
import { heading } from '../FeedList/FeedsList.css';
import { container, feedCard, grid, imageWrapper, leftGrid, rightGrid } from './FeedsHero.css';

interface FeedsHeroProps {
	editorsChoiceFeeds: Feed[];
	featuredFeeds: Feed[];
}

export const FeedsHero: React.FC<FeedsHeroProps> = ({ editorsChoiceFeeds, featuredFeeds }) => {
	return (
		<Box as="section" className={container}>
			<Flex flexDirection="column" gap={8} mb={48}>
				<Heading variant="h1" as="h1" className={heading}>
					Editor's Choice
				</Heading>
				<Text size="xLarge" opacity={0.5}>
					Hand picked, latest best feeds
				</Text>
			</Flex>

			<div className={grid}>
				<div className={leftGrid}>
					{editorsChoiceFeeds.map((feed: Feed) => (
						<FeedCardHero
							className={feedCard}
							imageWrapperClassName={imageWrapper}
							key={feed.id}
							feed={feed}
							variant="large"
						/>
					))}
				</div>

				<div className={rightGrid}>
					{featuredFeeds.map((feed: Feed) => (
						<FeedCardHero
							className={feedCard}
							imageWrapperClassName={imageWrapper}
							key={feed.id}
							feed={feed}
							variant="small"
						/>
					))}
				</div>
			</div>
		</Box>
	);
};
