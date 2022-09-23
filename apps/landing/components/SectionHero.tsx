import Image from 'next/image';
import { x } from '@xstyled/emotion';

import { Container } from '@/components/elements/Container';

const SectionHero = () => {
	return (
		<x.section alignItems="center" display="flex" minHeight="640px" h="calc(80vh - 96px)" position="relative">
			<Container position="relative">
				<x.div position="relative">
					<x.h1
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
						textAlign="center"
						textTransform="uppercase">
						DevObserver
					</x.h1>
					<x.h2
						fontSize={{ _: 16, sm: 20, lg: 32, xl: 40, xxl: 64 }}
						fontWeight={900}
						lineHeight={1}
						mb={{ _: 12, sm: 16, lg: 20, xl: 24, xxl: 36 }}
						textAlign="center"
						textTransform="uppercase">
						App For Each Developer
					</x.h2>
					<x.p
						fontSize={{ _: 12, sm: 14, lg: 16, xl: 20, xxl: 24 }}
						lineHeight={1.2}
						maxWidth={{
							_: '70%',
							lg: '60%',
							xl: '50%',
						}}
						mx="auto"
						opacity={0.3}
						textAlign="center">
						Stay tuned with the latest developer news, articles, tutorials, releases, jokes, fun and much
						more.
					</x.p>
				</x.div>
			</Container>

			<x.div position="absolute" left={0} bottom={0} py={64} w="100%">
				<Container>
					<x.div display="flex" alignItems="center" gap={24} justifyContent="center" flexWrap="wrap">
						<x.ul display="flex" alignItems="center" gap={24}>
							<li>
								<x.a
									display="block"
									h={40}
									href="https://apps.apple.com/us/app/devobserver/id1575198748"
									target="_blank"
									rel="noreferrer">
									<Image src="/images/badge-app-store.svg" alt="" width="120" height="40" />
								</x.a>
							</li>
							<li>
								<x.div display="block" h={40} opacity={0.2}>
									<Image src="/images/badge-google-play.svg" alt="" width="136" height="40" />
								</x.div>
							</li>
						</x.ul>
						<x.ul display="flex" alignItems="center" gap={24}>
							<li>
								<x.a
									display="block"
									h={40}
									href="https://chrome.google.com/webstore/detail/devobserver/afbaeofnmedcmhdkddlcdfmighhpieib"
									target="_blank"
									rel="noreferrer">
									<Image src="/images/chrome.svg" alt="" width="40" height="40" />
								</x.a>
							</li>
							<li>
								<x.div display="block" h={40} opacity={0.2}>
									<Image src="/images/safari.svg" alt="" width="40" height="40" />
								</x.div>
							</li>
							<li>
								<x.div display="block" h={40} opacity={0.2}>
									<Image src="/images/firefox.svg" alt="" width="40" height="40" />
								</x.div>
							</li>
						</x.ul>
					</x.div>
				</Container>
			</x.div>
		</x.section>
	);
};

export default SectionHero;
