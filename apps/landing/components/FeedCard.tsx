import { x } from '@xstyled/emotion';
import Image from 'next/image';

export const FeedCard = ({ feed }: any) => {
	return (
		<x.div
			style={{
				aspectRatio: '21 / 14',
			}}
			borderRadius={24}
			display="flex"
			overflow="hidden"
			position="relative"
			w={{
				_: '80%',
				md: '33.33%',
				xl: '25%',
				xxl: '20%',
			}}
			/* w={380}
			h={226}*/
			flexShrink={0}>
			<x.div display="flex">
				<Image
					src={`https://assets.devobserver.com${feed.image}`}
					objectFit="cover"
					height={280}
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
