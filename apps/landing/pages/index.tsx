import SectionHero from '@/components/SectionHero';
import SectionAppPreview from '@/components/SectionAppPreview';
import SectionAppPreview2 from '@/components/SectionAppPreview2';
import SectionFeaturesList from '@/components/SectionFeaturesList';
import { SectionFeeds } from '@/components/SectionFeeds';
import { gqPublicClient } from '../graphql/client';
import { PUBLIC_FEEDS_QUERY } from '../graphql/queries/feeds';

export async function getServerSideProps() {
	const feeds = await gqPublicClient.request(PUBLIC_FEEDS_QUERY);
	return { props: { data: feeds } };
}

const HomePage = ({ data }: any) => {
	return (
		<>
			<SectionHero />
			<SectionAppPreview />
			<SectionFeaturesList />
			<SectionFeeds data={data} />
			<SectionAppPreview2 />
		</>
	);
};

export default HomePage;
