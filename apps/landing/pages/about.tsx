import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Container } from '@/components/elements/Container';

const AboutPage = () => {
	return (
		<x.section minHeight="640px" py={120}>
			<Container>
				<x.div display="grid" gap={48} gridTemplateColumns="33% 1fr" mx="auto">
					<x.div borderRadius={24} overflow="hidden">
						<Image src="/images/iamfrntdv.jpg" alt="" width="1280" height="1920" />
					</x.div>
					<x.div>
						<h1>About</h1>
						<p>Hi!</p>
						<p>My name is Eduard. I'm founder of DevObserver.</p>
					</x.div>
				</x.div>
			</Container>
		</x.section>
	);
};

export default AboutPage;
