import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { GET_CHANNELS } from '../api/authenticated/operations/get-channels';
import { SAVE_CHANNELS } from '../api/authenticated/operations/save-channels';
import { ChannelsList } from '../components/ChannelsList';
import { Loader } from '../components/Loader';
import { SectionHeader } from '../components/SectionHeader';
import { ViewLayout } from '../layouts/ViewLayout';
import { Channel } from '../types/GeneratedTypes';
import { Button, HStack } from '../ui';

interface ChannelsData {
	channels: Channel[];
}

const tabs = [
	{
		name: 'Programming',
	},
	{
		name: 'Releases',
	},
	{
		name: 'Tech',
	},
];

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
			<SectionHeader title="Channels">
				<HStack as="ul" alignItems="center" className="gap-12">
					{tabs.map((tab) => {
						return (
							<li key={tab.name}>
								<Button
									intent="ghost"
									onClick={() => onCategoryChange(tab.name)}
									className={currentCategory === tab.name ? 'bg-gray-100' : ''}>
									{tab.name}
								</Button>
							</li>
						);
					})}
				</HStack>
			</SectionHeader>

			<ChannelsList channels={filteredChannels} toggleChannel={toggleChannel} />

			{channelsChanged ? (
				<div
					className="flex items-center fixed bottom-96 left-1/2 -translate-x-1/2 p-8 gap-12 rounded-16 backdrop-blur"
					style={{ backgroundColor: 'rgba(30,30,30,.85)' }}>
					<Button intent="primary" onClick={saveChanges}>
						Save
					</Button>
					<Button intent="secondary" onClick={cancelChange}>
						Cancel
					</Button>
				</div>
			) : (
				<></>
			)}
		</ViewLayout>
	);
};
