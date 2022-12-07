import React from 'react';

import { config } from '../../../config';
import { ReactComponent as CheckmarkIcon } from '../../assets/checkmark.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { Channel } from '../../types/GeneratedTypes';
import { Box, Flex, Heading, Text } from '../../ui';
import { card, image, imageWrapper } from './Channels.css';

interface ChannelCard {
	channel: Channel;
	toggleChannel: (id: string) => void;
}

const ChannelCard: React.FC<ChannelCard> = ({ channel, toggleChannel }) => {
	const onToggleChannel = () => {
		toggleChannel(channel.id);
	};

	return (
		<button onClick={onToggleChannel} className={card}>
			<Flex flexDirection="column" flexGrow={1} gap={24}>
				<Flex alignItems="center" gap={12}>
					<div className={imageWrapper}>
						<img className={image} src={`${config.assetsUrl}${channel.image}`} alt={channel.name} />
					</div>
					<Heading as="h3" variant="h6">
						{channel.name}
					</Heading>
				</Flex>
				<Box opacity={0.6}>
					<Text>{channel.description}</Text>
				</Box>
			</Flex>
			<div>{channel.favourite ? <CheckmarkIcon /> : <PlusIcon />}</div>
		</button>
	);
};

export default ChannelCard;
