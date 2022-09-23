import { x } from '@xstyled/emotion';
import { FeedCard } from '@/components/FeedCard';

export const SectionFeeds = ({ data }: any) => {
	const feedsRow1 = data.feeds.slice(0, 40);
	const feedsRow2 = data.feeds.slice(40, 80);
	const feedsRow3 = data.feeds.slice(80, 120);

	return (
		<x.section overflowX="hidden" py={72} position="relative" w="100%">
			<x.h1
				fontSize={{
					_: 24,
					sm: 36,
					lg: 48,
				}}
				fontWeight={800}
				lineHeight={1.1}
				mx="auto"
				mb={64}
				textAlign="center">
				Always up to date <br />
				with the latest programming news
			</x.h1>

			<x.div display="flex" gap={24} mb={24} px={24} className="row1Animation">
				{feedsRow1 &&
					feedsRow1.map((feed: any) => {
						return <FeedCard key={feed.id} feed={feed} />;
					})}
			</x.div>

			<x.div display="flex" gap={24} mb={24} px={24} className="row2Animation">
				{feedsRow2 &&
					feedsRow2.map((feed: any) => {
						return <FeedCard key={feed.id} feed={feed} />;
					})}
			</x.div>

			<x.div display="flex" gap={24} px={24} className="row3Animation">
				{feedsRow3 &&
					feedsRow3.map((feed: any) => {
						return <FeedCard key={feed.id} feed={feed} />;
					})}
			</x.div>
		</x.section>
	);
};
