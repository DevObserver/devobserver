import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Section } from '@/components/Elements';
import { Container } from '@/components/Elements/Container';
import { SectionDescription } from '@/components/HomePageSections/SectionDescription';

const Section3 = () => {
	return (
		<Section background="#f9f9f9">
			<Container position="relative" flexGrow={1}>
				<SectionDescription
					title="Everyday guide."
					description="Being aware with the latest programming trends is an integral part of developer's every daily life. Stay tuned with the DevObserver mobile app!"
				/>

				<x.div
					display="flex"
					mt={{
						_: '',
						xl: '-120px',
						xxl: '-180px',
					}}
					mx="auto">
					<Image
						src="/images/1.png"
						alt=""
						width="1960"
						height="1470"
						style={{ maxWidth: '100%', height: 'auto !important', objectFit: 'contain' }}
					/>
				</x.div>
			</Container>
		</Section>
	);
};

export default Section3;
