import { FC } from 'react';

import { Heading, Text, VStack } from '../ui';

interface SectionHeaderProps {
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle, children }) => {
	return (
		<VStack className="gap-12 mb-48" alignItems="flexStart">
			<VStack className="gap-8">
				{title && (
					<Heading variant="h1" as="h1" className="uppercase">
						{title}
					</Heading>
				)}
				{subtitle && (
					<Text size="xLarge" className="opacity-50">
						{subtitle}
					</Text>
				)}
			</VStack>
			{children}
		</VStack>
	);
};
