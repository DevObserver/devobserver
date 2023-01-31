import { x } from '@xstyled/emotion';
import Image from 'next/image';

export const FeedCardLarge = ({ feed }: any) => {
	return (
		<x.div
			style={{
				aspectRatio: '21 / 15',
			}}
			borderRadius={24}
			display="flex"
			overflow="hidden"
			position="relative"
			w={{
				_: '90%',
				md: '45%',
				xl: '33.33%',
			}}
			flexShrink={0}>
			<x.div display="flex" w="100%">
				<Image
					src={`https://assets.devobserver.com${feed.image}`}
					height={280}
					style={{ objectFit: 'cover', width: '100% !important', height: '100% !important' }}
					width={640}
					alt="Feed Image"
				/>
			</x.div>
			<x.div
				alignItems="flex-end"
				backgroundImage="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,1))"
				color="#fff"
				display="flex"
				h="100%"
				left={0}
				p={24}
				position="absolute"
				top={0}
				w="100%">
				<x.div>
					<x.p fontSize={12} opacity={0.6} mb={4}>
						{feed.channel.name}
					</x.p>
					<x.h3 fontSize={14}>{feed.title}</x.h3>
				</x.div>
			</x.div>
		</x.div>
	);
};
