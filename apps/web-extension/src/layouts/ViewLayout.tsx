import React, { ReactNode } from 'react';

import { VStack } from '../ui';

interface ViewLayoutProps {
	children: ReactNode;
}

export const ViewLayout: React.FC<ViewLayoutProps> = ({ children }) => (
	<VStack className="gap-48 pt-12 pb-24">{children}</VStack>
);
