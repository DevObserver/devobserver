import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Section } from '@/components/Elements';
import { Container } from '@/components/Elements/Container';
import { SectionDescription } from '@/components/HomePageSections/SectionDescription';

export const Section4 = () => {
	return (
		<Section background="#f9f9f9">
			<Container>
				<SectionDescription
					align="right"
					title="Take it further with your favourite browser."
					description="DevObserver is also available as a browser extension to make your experience even better."
				/>
				<x.div
					mt={{
						_: '',
						xl: '-120px',
						xxl: '-180px',
					}}>
					<Image src="/images/2.png" alt="" width="1960" height="1470" />
				</x.div>
			</Container>
		</Section>
	);
};
