import { x } from '@xstyled/emotion';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Elements/Container';

export const Footer = () => {
	return (
		<x.footer backgroundColor="rgba(220,220,220,.2)" padding="64px 0" w="100%">
			<Container
				display="flex"
				flexDirection="column"
				gap={{
					_: 24,
					md: 48,
				}}>
				<x.div
					display="flex"
					flexDirection={{
						_: 'column',
						md: 'row',
					}}
					gap={{ _: 24, md: 64 }}>
					<x.div flexGrow={1}>
						<Link href="/">
							<x.div h="32" w="32">
								<Image
									src="/images/do-logo.svg"
									alt=""
									width="64"
									height="64"
									style={{ maxWidth: '100% !important', maxHeight: '100% !important' }}
								/>
							</x.div>
						</Link>
					</x.div>
					<x.div>
						<x.h3 mb={8}>DevObserver</x.h3>
						<x.ul display="flex" flexDirection="column" gap={4}>
							<li>
								<Link href="/">Home</Link>
							</li>
							{/*							<li>
								<Link href="/about">About</Link>
							</li>*/}
							<li>
								<Link href="/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/terms-of-use">Terms of use</Link>
							</li>
						</x.ul>
					</x.div>
					<x.div>
						<x.h3 mb={8}>Follow Us</x.h3>
						<x.ul display="flex" flexDirection="column" gap={4}>
							<li>
								<a href="https://ko-fi.com/devobserver" target="_blank" rel="noreferrer">
									Ko-fi
								</a>
							</li>
							{/*							<li>
								<a href="https://github.com/DevObserver" target="_blank" rel="noreferrer">
									Github
								</a>
							</li>*/}
							<li>
								<a href="https://twitter.com/DevObserverCom" target="_blank" rel="noreferrer">
									Twitter
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/devobserver" target="_blank" rel="noreferrer">
									Instagram
								</a>
							</li>
						</x.ul>
					</x.div>
				</x.div>
				<x.div display="flex" justifyContent={{ md: 'flex-end' }}>
					<x.a
						href="https://simpleanalytics.com/?utm_source=devobserver.com&utm_content=badge"
						rel="noreferrer"
						referrerPolicy="origin"
						maxWidth="160px"
						target="_blank">
						<Image
							src="/images/simpleanalytics.com.svg"
							alt=""
							width="210"
							height="50"
							style={{ maxWidth: '100%' }}
						/>
					</x.a>
				</x.div>
				<x.div>
					<p>
						2022. Brought to You with ❤️ by{' '}
						<a href="https://twitter.com/iamfrntdv" target="_blank" rel="noreferrer">
							@iamfrntdv
						</a>
						.
					</p>
				</x.div>
			</Container>
		</x.footer>
	);
};
