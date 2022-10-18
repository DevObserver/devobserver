import { x } from '@xstyled/emotion';
import React, { ReactNode } from 'react';

type SectionProps = {
	children: ReactNode;
	background?: string;
};

export const Section: React.FC<SectionProps> = ({ children, background }) => {
	return (
		<x.div
			as={'section'}
			overflowX={'hidden'}
			position="relative"
			background={background}
			py={{
				_: 48,
				md: 72,
				lg: 96,
			}}
			w="100%">
			{children}
		</x.div>
	);
};
