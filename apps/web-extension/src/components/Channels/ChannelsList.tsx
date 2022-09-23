import React from 'react';

import { Channel } from '../../types/GeneratedTypes';
import ChannelCard from './ChannelCard';
import { grid } from './Channels.css';

interface ChannelsListProps {
	channels: Channel[];
	toggleChannel: (id: string) => void;
}

export const ChannelsList: React.FC<ChannelsListProps> = ({ channels, toggleChannel }) => {
	return (
		<div className={grid}>
			{channels.map((channel) => (
				<ChannelCard key={channel.id} channel={channel} toggleChannel={toggleChannel} />
			))}
		</div>
	);
};
