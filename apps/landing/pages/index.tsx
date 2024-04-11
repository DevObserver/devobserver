import { x } from '@xstyled/emotion';

import Section1 from '@/components/HomePageSections/Section1';
import Section3 from '@/components/HomePageSections/Section3';
import { Section4 } from '@/components/HomePageSections/Section4';
import { Section5 } from '@/components/HomePageSections/Section5';

const HomePage = ({ data }: any) => {
	return (
		<x.div overflowX="hidden">
			<Section1 />
			<Section3 />
			<Section4 />
			<Section5 />
		</x.div>
	);
};

export default HomePage;
