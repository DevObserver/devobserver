import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Text } from '@/components/Elements';
import { Container } from '@/components/Elements/Container';

const linkList = [
	{
		name: 'Apple App Store',
		url: 'https://apps.apple.com/us/app/devobserver/id1575198748',
		image: '/images/badge-app-store.svg',
		imageWidth: '120',
		imageHeight: '40',
	},
	{
		name: 'Google Play Store',
		image: '/images/badge-google-play.svg',
		imageWidth: '136',
		imageHeight: '40',
	},
	{
		name: 'Google Chrome Web Store',
		url: 'https://chrome.google.com/webstore/detail/devobserver/afbaeofnmedcmhdkddlcdfmighhpieib',
		image: '/images/chrome.svg',
		imageWidth: '40',
		imageHeight: '40',
	},
	{
		name: 'Mac App Store',
		image: '/images/safari.svg',
		imageWidth: '40',
		imageHeight: '40',
	},
	{
		name: 'Firefox Web Store',
		url: 'https://addons.mozilla.org/en-US/firefox/addon/devobserver/',
		image: '/images/firefox.svg',
		imageWidth: '40',
		imageHeight: '40',
	},
];

const Section1 = () => {
	return (
		<x.section
			className="mobileFullHeight"
			alignItems="center"
			display="flex"
			minHeight={{
				_: '568px',
				md: '640px',
			}}
			h="100vh"
			position="relative">
			<Container position="relative" flexGrow={1}>
				<x.div position="relative">
					<x.h1
						className="scaleOut"
						fontSize={{
							_: 32,
							sm: 48,
							lg: 72,
							xl: 96,
							xxl: 144,
							'3xl': 168,
						}}
						fontWeight={900}
						lineHeight={1}
						position="relative"
						textAlign="center"
						textTransform="uppercase"
						zIndex={1}>
						DevObserver
					</x.h1>
					<x.h2
						color="#fff"
						className="textStroke"
						display="flex"
						flexDirection="column"
						fontSize={{
							_: 32,
							sm: 48,
							lg: 72,
							xl: 96,
							xxl: 144,
							'3xl': 168,
						}}
						fontWeight={900}
						lineHeight={1}
						textTransform="uppercase"
						position="absolute"
						top="50%"
						left="50%"
						w="100%"
						transform="translate(-50%, -50%)">
						<span className="slideInLeft">App For Each</span>{' '}
						<x.span className="slideInRight" ml="auto">
							Developer
						</x.span>
					</x.h2>
				</x.div>
			</Container>

			<x.div
				className="slideInBottom"
				position="absolute"
				left={0}
				bottom={0}
				py={{ _: '12px', xl: '24px', xxl: '48px' }}
				w="100%">
				<Container position="relative">
					<x.div display="flex" flexDirection="column" gap={24}>
						<x.div display="flex" flexDirection="column" gap={12}>
							<Text text={{ _: '16/24', sm: '18/24', lg: '20/28', xl: '24/36' }} opacity={0.3}>
								各開発者向けアプリ
							</Text>
							<Text text={{ _: '24/36', sm: '36/44', lg: '48/56', xl: '64/1' }} fontWeight={500}>
								開発オブザーバー
							</Text>
							<Text text={{ _: '12/16', sm: '14/20', lg: '16/24', xl: '18/24' }} maxWidth={420}>
								Stay tuned with the latest developer news, articles, tutorials, releases, jokes, fun and much
								more.
							</Text>
						</x.div>

						<x.ul display="flex" alignItems="center" gap={24}>
							{linkList.map((link) => {
								return (
									<li key={link.name}>
										{link.url ? (
											<a href={link.url} target="_blank" rel="noreferrer">
												<Image
													src={link.image}
													alt={link.name}
													width={link.imageWidth}
													height={link.imageHeight}
												/>
											</a>
										) : (
											<x.div opacity={0.2}>
												<Image
													src={link.image}
													alt={link.name}
													width={link.imageWidth}
													height={link.imageHeight}
												/>
											</x.div>
										)}
									</li>
								);
							})}
						</x.ul>
					</x.div>
				</Container>
			</x.div>
		</x.section>
	);
};

export default Section1;
