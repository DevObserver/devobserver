import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

import { GET_CHANNEL } from '../api/authenticated/operations/get-channel';
import { FeedsList } from '../components/FeedList/FeedsList';
import { Loader } from '../components/Loader/Loader';
import { ViewLayout } from '../layouts/ViewLayout';
import { Channel as ChannelType, Feed } from '../types/GeneratedTypes';

interface ChannelData {
	channel: ChannelType;
	feeds: Feed[];
}

export const Channel = () => {
	const { id } = useParams();

	if (!id) {
		return <></>;
	}

	const { loading, data } = useQuery<ChannelData>(GET_CHANNEL, {
		variables: { channelId: id },
	});

	if (loading) {
		return <Loader title="channel" />;
	}

	if (!data) {
		return <></>;
	}

	return (
		<ViewLayout>
			<FeedsList title={data.channel.name} feeds={data.feeds} />
		</ViewLayout>
	);
};
