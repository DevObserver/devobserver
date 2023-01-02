import React from 'react';

import { config } from '../../config';
import { ReactComponent as CheckmarkIcon } from '../assets/checkmark.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { Channel } from '../types/GeneratedTypes';
import { Heading, HStack, Text, VStack } from '../ui';

interface ChannelCard {
	channel: Channel;
	toggleChannel: (id: string) => void;
}

export const ChannelCard: React.FC<ChannelCard> = ({ channel, toggleChannel }) => {
	const onToggleChannel = () => {
		toggleChannel(channel.id);
	};

	return (
		<button
			onClick={onToggleChannel}
			className="bg-gray-50 dark:bg-gray-930 rounded-16 flex flex-col gap-24 p-24 text-left w-full">
			<VStack className="grow gap-24">
				<HStack className="gap-12" alignItems="center">
					<div className="flex shrink-0 rounded-full overflow-hidden h-56 w-56">
						<img
							className="object-cover w-full"
							src={`${config.assetsUrl}${channel.image}`}
							alt={channel.name}
						/>
					</div>
					<Heading as="h3" variant="h6">
						{channel.name}
					</Heading>
				</HStack>
				<HStack className="opacity-60">
					<Text>{channel.description}</Text>
				</HStack>
			</VStack>
			<div>{channel.favourite ? <CheckmarkIcon /> : <PlusIcon />}</div>
		</button>
	);
};
