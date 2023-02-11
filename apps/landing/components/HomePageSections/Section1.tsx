import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Text } from '@/components/Elements';
import { Container } from '@/components/Elements/Container';

const linkList = [
	{
		name: 'Apple App Store',
		url: 'https://apps.apple.com/us/app/devobserver/id1575198748',
		image: <Image src="/images/badge-app-store.svg" width="120" height="40" alt="" />,
	},
	{
		name: 'Google Play Store',
		url: 'https://play.google.com/store/apps/details?id=com.devobserver',
		image: <Image src="/images/badge-google-play.svg" width="136" height="40" alt="" />,
	},
	{
		name: 'Google Chrome Web Store',
		url: 'https://chrome.google.com/webstore/detail/devobserver/afbaeofnmedcmhdkddlcdfmighhpieib',
		image: <Image src="/images/chrome.svg" width="40" height="40" alt="" />,
	},
	// {
	// 	name: 'Mac App Store',
	// 	image: <Image src="/images/safari.svg" width="40" height="40" alt="" />,
	// },
	{
		name: 'Firefox Web Store',
		url: 'https://addons.mozilla.org/en-US/firefox/addon/devobserver/',
		image: <Image src="/images/firefox.svg" width="40" height="40" alt="" />,
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
				md: '768px',
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
							lg: 96,
							xl: 132,
							xxl: 168,
							'3xl': 196,
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
							lg: 96,
							xl: 132,
							xxl: 168,
							'3xl': 196,
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
					<x.div alignItems="center" display="flex" flexDirection="column" gap={24} w="100%">
						<x.div display="flex" flexDirection="column" gap={8}>
							<Text
								text={{ _: '16/24', sm: '18/24', lg: '20/28', xl: '24/36' }}
								opacity={0.3}
								textAlign="center">
								各開発者向けアプリ
							</Text>
							<Text
								text={{ _: '24/36', sm: '36/44', lg: '48/56', xl: '64/1' }}
								fontWeight={500}
								mb={4}
								textAlign="center">
								開発オブザーバー
							</Text>
							<Text
								text={{ _: '12/16', sm: '14/20', lg: '16/24' }}
								mx="auto"
								maxWidth={420}
								opacity={0.6}
								textAlign="center">
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
												{link.image}
											</a>
										) : (
											<x.div opacity={0.2}>{link.image}</x.div>
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
