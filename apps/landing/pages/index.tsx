import { x } from '@xstyled/emotion';

import Section1 from '@/components/HomePageSections/Section1';
import { Section2 } from '@/components/HomePageSections/Section2';
import Section3 from '@/components/HomePageSections/Section3';
import { Section4 } from '@/components/HomePageSections/Section4';
import { Section5 } from '@/components/HomePageSections/Section5';

import { gqPublicClient } from '../graphql/client';
import { PUBLIC_FEEDS_QUERY } from '../graphql/queries/feeds';

export async function getServerSideProps() {
	const feeds = await gqPublicClient.request(PUBLIC_FEEDS_QUERY);
	return { props: { data: feeds } };
}

const HomePage = ({ data }: any) => {
	return (
		<x.div overflowX="hidden">
			<Section1 />
			<Section2 data={data} />
			<Section3 />
			<Section4 />
			<Section5 />
		</x.div>
	);
};

export default HomePage;
