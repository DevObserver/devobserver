import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { GET_CHANNELS } from '../api/authenticated/operations/get-channels';
import { SAVE_CHANNELS } from '../api/authenticated/operations/save-channels';
import { ChannelsList } from '../components/Channels/ChannelsList';
import { heading, titleLine } from '../components/FeedList/FeedsList.css';
import { Loader } from '../components/Loader/Loader';
import { ViewLayout } from '../layouts/ViewLayout';
import { Channel } from '../types/GeneratedTypes';
import { Button, Flex, Heading } from '../ui';
import { footer } from './Channels.css';

interface ChannelsData {
	channels: Channel[];
}

export const Channels = () => {
	const { loading, error, data, client, refetch } = useQuery<ChannelsData>(GET_CHANNELS);
	const [saveChannels] = useMutation(SAVE_CHANNELS);

	const [currentCategory, setCurrentCategory] = useState('Programming');
	const [channelsChanged, setChannelChange] = useState(false);

	const toggleChannel = (id: string) => {
		const cacheData = client.cache.readQuery<ChannelsData>({ query: GET_CHANNELS });

		if (!cacheData) {
			return;
		}

		setChannelChange(true);

		const updatedChannels = cacheData.channels.map((channel) => {
			if (channel.id === id) {
				return {
					...channel,
					favourite: !channel.favourite,
				};
			}

			return channel;
		});

		client.cache.writeQuery<ChannelsData>({
			query: GET_CHANNELS,
			data: { channels: updatedChannels },
		});
	};

	const saveChanges = async () => {
		if (!data) {
			return;
		}

		const favouriteChannels = data.channels.filter((channel) => channel.favourite);
		const favouriteChannelIds = favouriteChannels.map((channel) => channel.id);
		await saveChannels({ variables: { channels: favouriteChannelIds } });

		setChannelChange(false);
		return;
	};

	const cancelChange = async () => {
		await refetch();
		setChannelChange(false);
	};

	if (loading) {
		return <Loader title="channels" />;
	}

	if (error) {
		return (
			<div>
				<p>Error... {JSON.stringify(error)}</p>
			</div>
		);
	}

	const onCategoryChange = (categoryId: string) => {
		setCurrentCategory(categoryId);
	};

	if (!data) {
		return <></>;
	}

	const filteredChannels = data.channels.filter((channel) => channel.category.name === currentCategory);

	return (
		<ViewLayout>
			<Flex alignItems="center" justifyContent="space-between" gap={24}>
				<Flex alignItems="center" gap={24}>
					<Heading variant="h1" as="h1" className={heading}>
						Channels
					</Heading>
				</Flex>

				<Flex as="ul" alignItems="center" gap={12}>
					<li>
						<Button variant="ghost" onClick={() => onCategoryChange('Programming')}>
							programming
						</Button>
					</li>
					<li>
						<Button variant="ghost" onClick={() => onCategoryChange('Releases')}>
							releases
						</Button>
					</li>
					<li>
						<Button variant="ghost" onClick={() => onCategoryChange('Tech')}>
							tech
						</Button>
					</li>
				</Flex>
			</Flex>
			<div>
				<ChannelsList channels={filteredChannels} toggleChannel={toggleChannel} />
			</div>
			{channelsChanged ? (
				<div className={footer}>
					<Button variant="primary" onClick={saveChanges}>
						Save
					</Button>
					<Button variant="secondary" onClick={cancelChange}>
						Cancel
					</Button>
				</div>
			) : (
				<></>
			)}
		</ViewLayout>
	);
};
