import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';

import { config } from '../../config';
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { ReactComponent as BookmarkFillIcon } from '../assets/bookmark-fill.svg';
import { Feed } from '../types/GeneratedTypes';
import { Avatar, Heading, HStack, Image, Text, VStack } from '../ui';
import { NativeLink } from '../ui/NativeLink';
import { RouterLink } from '../ui/RouterLink';

TimeAgo.addLocale(en);

interface FeedCardSmallProps {
	feed: Feed;
	variant?: 'large' | 'medium' | 'small';
	className?: string;
	imageWrapperClassName?: string;
	onToggle?: (feed: Feed) => void;
}

export const FeedCard: React.FC<FeedCardSmallProps> = ({ feed, variant = 'small', className, onToggle }) => {
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
		<VStack
			className={`bg-gray-50 dark:bg-gray-930 rounded-16 overflow-hidden transition-all hover:-translate-y-4 ${
				feed.viewed ? 'opacity-60 hover:opacity-100' : ''
			} ${className}`}>
			<Image href={url} target="_blank" src={`${config.assetsUrl}${feed.image}`} alt="Feed image" />
			<VStack className="grow gap-24 p-24">
				<VStack className={`gap-12 ${variant !== 'small' ? 'pr-12' : 0} grow`}>
					<HStack className="items-center gap-12">
						<RouterLink
							title={feed.channel.name}
							to={`/channel/${feed.channel.id}`}
							className="opacity-60 hover:opacity-100 transition-all">
							<HStack className="items-center gap-12">
								<Avatar src={`${config.assetsUrl}${feed.channel.image}`} alt={feed.channel.name} />
								<span>{feed.channel.name}</span>
							</HStack>
						</RouterLink>
					</HStack>

					<Heading as="h3" variant={headingVariant()}>
						<NativeLink href={url} rel="noopener" target="_blank">
							{feed.title}
						</NativeLink>
					</Heading>
				</VStack>

				<HStack className="items-center gap-24">
					<HStack className="items-center gap-8 opacity-50 grow">
						{feed.created && <Text size="small">{timeAgo.format(new Date(feed.created))}</Text>}
						<div className="bg-gray-50 h-4 w-4"></div>
						<Text size="small">{feed.views} views</Text>
					</HStack>
					{onToggle && (
						<button
							className="flex items-center appearance-none bg-transparent border-none justify-end opacity-50 hover:opacity-100 transition-all"
							onClick={() => onToggle(feed)}>
							{feed.saved ? (
								<BookmarkFillIcon className="h-18 w-18" />
							) : (
								<BookmarkIcon className="h-18 w-18" />
							)}
						</button>
					)}
				</HStack>
			</VStack>
		</VStack>
	);
};
