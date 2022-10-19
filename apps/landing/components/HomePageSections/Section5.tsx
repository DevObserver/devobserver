import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Section } from '@/components/Elements';
import { Container } from '@/components/Elements/Container';
import { SectionDescription } from '@/components/HomePageSections/SectionDescription';

const Title = (props: any) => (
	<x.li
		fontSize={{
			_: 20,
			md: 24,
			lg: 36,
		}}
		fontWeight={600}
		lineHeight={1.2}
		opacity={0.4}
		textAlign="center"
		{...props}
	/>
);

const images = [
	{
		src: '/images/channel-1.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-2.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-3.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-4.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-5.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-6.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-7.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-8.jpg',
		height: '480',
		width: '480',
	},
	{
		src: '/images/channel-9.jpg',
		height: '480',
		width: '480',
	},
];

export const Section5 = () => {
	return (
		<Section background="#f9f9f9">
			<Container>
				<SectionDescription
					align="center"
					title="Always something new."
					description="DevObserver has hundreds of hand picked channels and we work hard to add more channels to bring you a wider choice."
				/>
			</Container>
			<Container position="relative">
				<x.div position="relative" zIndex={1}>
					<Image src="/images/3.png" alt="" width="1960" height="1470" />
				</x.div>
				<x.ul
					display="flex"
					alignItems="center"
					gap={{
						_: 12,
						sm: 16,
						xl: 24,
					}}
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%,-50%)"
					w="auto">
					{images.map((image) => {
						return (
							<x.li
								key={image.src}
								display="flex"
								borderRadius={{
									_: 8,
									lg: 12,
									xl: 24,
								}}
								overflow="hidden"
								w={{ _: 64, sm: 72, md: 96, lg: 144, xl: 220 }}
								h={{ _: 64, sm: 72, md: 96, lg: 144, xl: 220 }}
								flexShrink="0">
								<Image src={image.src} alt="" width={image.width} height={image.height} />
							</x.li>
						);
					})}
				</x.ul>
			</Container>
			<Container>
				<x.ul display="flex" flexDirection="column" gap={{ _: 24, lg: 48, xl: 64 }} maxWidth={560} mx="auto">
					<Title>Infinite inspiration</Title>

					<Title>Hundreds of hand picked sources for you</Title>

					<Title>Personalize your feed with your favourite channels</Title>

					<Title>Save feeds for later</Title>

					<Title>Get your history</Title>

					<Title>Take a break with tech news and programming jokes</Title>

					<Title>
						Dark or Light?
						<br />
						Choose your side
					</Title>

					<Title>
						DevObserver is
						<br />
						free and open source
					</Title>
				</x.ul>
			</Container>
		</Section>
	);
};
