import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';

import { config } from '../../config';
import { Feed } from '../types/GeneratedTypes';
import { Heading, HStack, Text, VStack } from '../ui';
import { NativeLink } from '../ui/NativeLink';
import { RouterLink } from '../ui/RouterLink';

TimeAgo.addLocale(en);

interface FeedCardSmallProps {
	feed: Feed;
	variant?: 'large' | 'medium' | 'small';
	className?: string;
}

export const FeedCardHero: React.FC<FeedCardSmallProps> = ({ feed, variant = 'small', className }) => {
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
			className={`rounded-16 overflow-hidden transition-all h-full relative ${className ? className : ''}`}>
			<NativeLink href={url} rel="noopener" target="_blank" className="flex h-full">
				<VStack className="overflow-hidden aspect-[4/3] w-full">
					<img
						className="h-full w-full object-cover opacity-90"
						src={`${config.assetsUrl}${feed.image}`}
						alt="Feed image"
						loading={variant === 'small' ? 'lazy' : 'eager'}
					/>
				</VStack>
			</NativeLink>
			<div className="bg-translucent-white-900 dark:bg-translucent-gray-900 backdrop-blur absolute bottom-0 left-0 w-full p-24">
				<VStack className="gap-12">
					<VStack className="gap-4">
						<RouterLink title={feed.channel.name} to={`/channels/${feed.channel.id}`}>
							{feed.channel.name}
						</RouterLink>

						<Heading as="h3" variant={headingVariant()}>
							<NativeLink href={url} rel="noopener" target="_blank">
								{feed.title}
							</NativeLink>
						</Heading>
					</VStack>

					<HStack className="items-center opacity-50 gap-8">
						{feed.created && <Text size="small">{timeAgo.format(new Date(feed.created))}</Text>}
						{/* <div className={dot}></div>*/}
						<Text size="small">{feed.views} views</Text>
					</HStack>
				</VStack>
			</div>
		</VStack>
	);
};
