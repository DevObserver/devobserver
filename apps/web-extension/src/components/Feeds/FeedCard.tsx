import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';

import { config } from '../../../config';
import { Feed } from '../../types/GeneratedTypes';
import { Flex, Heading, Text } from '../Elements';
import { NativeLink } from '../Elements/NativeLink';
import { RouterLink } from '../Elements/RouterLink';
import { dot, feedCard, feedCardViewed, image, imageWrapper, line } from './FeedCard.css';

TimeAgo.addLocale(en);

interface FeedCardSmallProps {
	feed: Feed;
	variant?: 'large' | 'medium' | 'small';
	className?: string;
	imageWrapperClassName?: string;
}

export const FeedCard: React.FC<FeedCardSmallProps> = ({
	feed,
	variant = 'small',
	className,
	imageWrapperClassName,
}) => {
	const timeAgo = new TimeAgo('en-US');
	const url = `${config.baseUrl}/g/${feed.id}`;

	const headingVariant = () => {
		switch (variant) {
			case 'large':
				return 'h3';
			case 'medium':
				return 'h5';
			case 'small':
				return 'h6';
			default:
				return 'h6';
		}
	};

	return (
		<Flex
			className={`${feedCard} ${feed.viewed ? feedCardViewed : ''} ${className}`}
			flexDirection="column"
			gap={12}>
			<NativeLink href={url} rel="noopener" target="_blank">
				<div className={`${imageWrapper({ variant: variant })} ${imageWrapperClassName}`}>
					<img
						className={image}
						src={`${config.assetsUrl}${feed.image}`}
						alt="Feed image"
						loading={variant === 'small' ? 'lazy' : 'eager'}
					/>
				</div>
			</NativeLink>
			<Flex flexDirection="column" gap={8}>
				<Flex flexDirection="column" gap={4} pr={variant !== 'small' ? 12 : 0}>
					<Flex alignItems="center" gap={12} opacity={0.6}>
						<RouterLink title={feed.channel.name} to={`/channels/${feed.channel.id}`}>
							{feed.channel.name}
						</RouterLink>
						<div className={line}></div>
					</Flex>

					<Heading as="h3" variant={headingVariant()}>
						<NativeLink href={url} rel="noopener" target="_blank">
							{feed.title}
						</NativeLink>
					</Heading>
				</Flex>

				<Flex alignItems="center" gap={8} opacity={0.5}>
					{feed.created && <Text size="small">{timeAgo.format(new Date(feed.created))}</Text>}
					<div className={dot}></div>
					<Text size="small">{feed.views} views</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
