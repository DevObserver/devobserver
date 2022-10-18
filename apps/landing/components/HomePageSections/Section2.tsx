import { x } from '@xstyled/emotion';

import { Container, Section } from '@/components/Elements';
import { FeedCard } from '@/components/FeedCard';
import { FeedCardLarge } from '@/components/FeedCardLarge';
import { SectionDescription } from '@/components/HomePageSections/SectionDescription';

export const Section2 = ({ data }: any) => {
	// const feedsRow1 = data.feeds.slice(0, 40);
	// const feedsRow2 = data.feeds.slice(40, 80);
	// const feedsRow3 = data.feeds.slice(80, 120);

	return (
		<Section background="#f9f9f9">
			<Container
				mb={{
					_: 24,
					lg: 48,
				}}>
				<SectionDescription
					align="center"
					title="Always up to date."
					description="Explore our curated lists and stay tuned with the latest programming news from all over the world."
				/>
			</Container>

			<x.div display="flex" gap={24} mb={24} px={24} className="row1Animation">
				{data.feedsEditorsChoice &&
					data.feedsEditorsChoice.map((feed: any) => {
						return <FeedCardLarge key={feed.id} feed={feed} />;
					})}
			</x.div>

			<x.div display="flex" gap={24} mb={24} px={24} className="row2Animation">
				{data.feeds &&
					data.feeds.map((feed: any) => {
						return <FeedCard key={feed.id} feed={feed} />;
					})}
			</x.div>

			{/*		<x.div display="flex" gap={24} px={24} className="row3Animation">
				{feedsRow3 &&
					feedsRow3.map((feed: any) => {
						return <FeedCard key={feed.id} feed={feed} />;
					})}
			</x.div>*/}
		</Section>
	);
};
