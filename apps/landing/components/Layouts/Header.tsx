import { x } from '@xstyled/emotion';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Elements/Container';

export const Header = () => {
	return (
		<x.header className="slideInTop" position="absolute" top={0} left={0} py={24} zIndex={100} w="100%">
			<Container alignItems="center" display="flex">
				<Link href="/">
					<x.div h="48px" w="48px">
						<Image src="/images/do-logo.svg" alt="" width="64" height="64" />
					</x.div>
				</Link>

				<x.nav display="flex" flexGrow={1} justifyContent="flex-end">
					<x.ul display="flex" gap={24}>
						<li>
							<a href="https://ko-fi.com/devobserver" target="_blank" rel="noreferrer">
								Ko-fi
							</a>
						</li>
						{/*						<li>
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
				</x.nav>
			</Container>
			{/* <div className="max-w-1320 mx-auto px-24 relative w-full">
					<div className="flex items-center justify-between gap-24">
						<div className="max-w-36 md:max-w-48">

						</div>

					</div>
				</div>*/}
		</x.header>
	);
};
