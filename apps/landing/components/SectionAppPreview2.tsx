import { x } from '@xstyled/emotion';
import Image from 'next/image';

import { Container } from '@/components/elements/Container';

const SectionAppPreview2 = () => {
	return (
		<x.div position="relative" pt={72}>
			<Container position="relative" h="100%">
				<x.h1
					fontSize={{
						_: 24,
						sm: 36,
						lg: 48,
					}}
					fontWeight={800}
					lineHeight={1.1}
					mx="auto"
					textAlign="center">
					Your favourite app always <br /> with you
				</x.h1>
			</Container>
			<Container alignItems="center" display="flex" position="relative" h="100%">
				<x.div
					backgroundColor="rgba(220,220,220,.4)"
					borderRadius={24}
					h="70%"
					left="50%"
					position="absolute"
					top="50%"
					transform="translate(-50%,-50%)"
					w="100%"></x.div>
				<Image src="/images/app-preview.png" alt="" width="1920" height="1080" />
			</Container>
		</x.div>
	);
};

export default SectionAppPreview2;
