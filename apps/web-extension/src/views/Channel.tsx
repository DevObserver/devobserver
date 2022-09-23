import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

import { FeedsList } from '../components/Feeds/FeedsList';
import { ViewLayout } from '../components/Layouts/ViewLayout';
import { Loader } from '../components/Loader/Loader';
import { GET_CHANNEL } from '../graphql/queries/get-channel';
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
		variables: { channelId: parseInt(id) },
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
