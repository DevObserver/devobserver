import { x } from '@xstyled/emotion';
import React from 'react';

import { Text } from '@/components/Elements';

type SectionDescription = {
	align?: 'left' | 'center' | 'right';
	title: string;
	description: string;
};

export const SectionDescription: React.FC<SectionDescription> = ({ align, title, description }) => {
	const justifyContent = () => {
		switch (align) {
			case 'left':
				return 'flex-start';
			case 'center':
				return 'center';
			case 'right':
				return 'flex-end';
			default:
				return '';
		}
	};

	console.log('justifyContent', justifyContent);

	return (
		<x.div display="flex" justifyContent={justifyContent()} w="100%">
			<x.div
				display="flex"
				flexDirection="column"
				gap={{
					_: 4,
					sm: 8,
					lg: 12,
					xxl: 16,
				}}
				maxWidth={620}
				w="100%">
				<Text
					as="h1"
					text={{
						_: '24/36',
						sm: '36/44',
						lg: '48/56',
						xxl: '56/1',
					}}
					textAlign={align}>
					{title}
				</Text>
				<Text
					opacity={0.4}
					text={{ _: '12/16', sm: '16/24', lg: '18/24', xl: '24/36' }}
					fontWeight={600}
					textAlign={align}>
					{description}
				</Text>
			</x.div>
		</x.div>
	);
};
