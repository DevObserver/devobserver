import React from 'react';

import { Feed } from '../../types/GeneratedTypes';
import { Box, Flex, Heading, Text } from '../Elements';
import { FeedCard } from './FeedCard';
import { list, titleLine } from './FeedsList.css';

interface FeedsListProps {
	title?: string;
	subtitle?: string;
	feeds: Feed[];
}

export const FeedsList: React.FC<FeedsListProps> = ({ title, subtitle, feeds }) => {
	return (
		<section>
			<Box mb={24}>
				{title && (
					<Flex alignItems="center" gap={24}>
						<Heading as="h3" variant="h3">
							{title}
						</Heading>
						<div className={titleLine}></div>
					</Flex>
				)}
				{subtitle && (
					<Text size="large" opacity={0.5}>
						{subtitle}
					</Text>
				)}
			</Box>

			{feeds && feeds.length ? (
				<div className={list}>
					{feeds.map((feed) => (
						<FeedCard key={feed.id} feed={feed} />
					))}
				</div>
			) : (
				<></>
			)}
		</section>
	);
};
