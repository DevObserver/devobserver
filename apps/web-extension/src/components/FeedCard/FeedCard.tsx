import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React, { useContext } from 'react';

import { config } from '../../../config';
import { ReactComponent as BookmarkIcon } from '../../assets/bookmark.svg';
import { ReactComponent as BookmarkFillIcon } from '../../assets/bookmark-fill.svg';
import { Feed } from '../../types/GeneratedTypes';
import { Flex, Heading, Text } from '../../ui';
import { NativeLink } from '../../ui/NativeLink';
import { RouterLink } from '../../ui/RouterLink';
import {
	channelImage,
	channelImageWrap,
	channelLink,
	dot,
	feedCard,
	feedCardViewed,
	image,
	imageWrapper,
	line,
	saveFeed,
	saveFeedIcon,
	textWrapper,
} from './FeedCard.css';

TimeAgo.addLocale(en);

interface FeedCardSmallProps {
	feed: Feed;
	variant?: 'large' | 'medium' | 'small';
	className?: string;
	imageWrapperClassName?: string;
	onToggle?: (feed: Feed) => void;
}

export const FeedCard: React.FC<FeedCardSmallProps> = ({
	feed,
	variant = 'small',
	className,
	imageWrapperClassName,
	onToggle,
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
		<Flex className={`${feedCard} ${feed.viewed ? feedCardViewed : ''} ${className}`} flexDirection="column">
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
			<Flex className={textWrapper} flexDirection="column" gap={24}>
				<Flex flexDirection="column" gap={12} pr={variant !== 'small' ? 12 : 0} flexGrow={1}>
					<Flex alignItems="center" gap={12}>
						<RouterLink title={feed.channel.name} to={`/channel/${feed.channel.id}`} className={channelLink}>
							<Flex alignItems="center" gap={12}>
								<span className={channelImageWrap}>
									<img
										className={channelImage}
										src={`${config.assetsUrl}${feed.channel.image}`}
										alt="feed.channel.name"
									/>
								</span>
								<span>{feed.channel.name}</span>
							</Flex>
						</RouterLink>
						<div className={line}></div>
					</Flex>

					<Heading as="h3" variant={headingVariant()}>
						<NativeLink href={url} rel="noopener" target="_blank">
							{feed.title}
						</NativeLink>
					</Heading>
				</Flex>

				<Flex alignItems="center" gap={24}>
					<Flex alignItems="center" gap={8} opacity={0.5} flexGrow={1}>
						{feed.created && <Text size="small">{timeAgo.format(new Date(feed.created))}</Text>}
						<div className={dot}></div>
						<Text size="small">{feed.views} views</Text>
					</Flex>
					{onToggle && (
						<Flex>
							<button className={saveFeed} onClick={() => onToggle(feed)}>
								{feed.saved ? (
									<BookmarkFillIcon className={saveFeedIcon} />
								) : (
									<BookmarkIcon className={saveFeedIcon} />
								)}
							</button>
						</Flex>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};
