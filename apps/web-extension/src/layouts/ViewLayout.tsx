import React, { ReactNode } from 'react';

import { Flex } from '../ui';

interface ViewLayoutProps {
	children: ReactNode;
}

export const ViewLayout: React.FC<ViewLayoutProps> = ({ children }) => (
	<Flex flexDirection="column" gap={48} pt={24} pb={24}>
		{children}
	</Flex>
);
