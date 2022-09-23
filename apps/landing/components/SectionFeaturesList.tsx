import { x } from '@xstyled/emotion';

import { Container } from '@/components/elements/Container';

const Title = (props: any) => (
	<x.li
		fontSize={{
			_: 24,
			lg: 36,
		}}
		fontWeight={600}
		lineHeight={1.2}
		opacity={0.4}
		textAlign="center"
		{...props}
	/>
);

const SectionFeaturesList = () => {
	return (
		<x.section pb={72}>
			<Container>
				<x.ul display="flex" flexDirection="column" gap={{ _: 32, lg: 64 }} maxWidth={560} mx="auto">
					<Title>Hundreds of hand picked sources for you.</Title>

					<Title>Stay up to date with the latest programming trends.</Title>

					<Title>Discover and follow your favourite channels.</Title>

					<Title>
						Save your favourite <br />
						feeds for later.
					</Title>

					<Title>Take a break with tech news and programming jokes.</Title>

					<Title>
						Dark or Light?
						<br /> Choose your side.
					</Title>

					<Title>And it's Free.</Title>
				</x.ul>
			</Container>
		</x.section>
	);
};

export default SectionFeaturesList;
