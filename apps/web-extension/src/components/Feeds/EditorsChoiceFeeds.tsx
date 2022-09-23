import React from 'react';

import { Feed } from '../../types/GeneratedTypes';
import { Box, Flex, Heading, Text } from '../Elements';
import { feedCard, grid, imageWrapper } from './EditorsChoiceFeeds.css';
import { FeedCard } from './FeedCard';
import { titleLine } from './FeedsList.css';

interface EditorsChoiceFeedsProps {
	feeds: Feed[];
}

export const EditorsChoiceFeeds: React.FC<EditorsChoiceFeedsProps> = ({ feeds }) => {
	return (
		<section>
			<Box mb={24}>
				<Flex alignItems="center" gap={24}>
					<Heading as="h1" variant="h1">
						Editor's Choice
					</Heading>
					<div className={titleLine}></div>
				</Flex>

				<Text size="large" opacity={0.5}>
					Hand picked, latest best feeds
				</Text>
			</Box>

			<div className={grid}>
				{feeds.map((feed: Feed) => (
					<FeedCard
						className={feedCard}
						imageWrapperClassName={imageWrapper}
						key={feed.id}
						feed={feed}
						variant="large"
					/>
				))}
			</div>
		</section>
	);
};
