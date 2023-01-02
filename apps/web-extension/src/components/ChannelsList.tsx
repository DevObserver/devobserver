import React from 'react';

import { Channel } from '../types/GeneratedTypes';
import { CardGrid } from '../ui';
import { ChannelCard } from './ChannelCard';

interface ChannelsListProps {
	channels: Channel[];
	toggleChannel: (id: string) => void;
}

export const ChannelsList: React.FC<ChannelsListProps> = ({ channels, toggleChannel }) => {
	return (
		<CardGrid>
			{channels.map((channel) => (
				<ChannelCard key={channel.id} channel={channel} toggleChannel={toggleChannel} />
			))}
		</CardGrid>
	);
};
