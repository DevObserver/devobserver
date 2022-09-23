import React, { ReactNode } from 'react';

import { container } from './ViewLayout.css';

interface ViewLayoutProps {
	children: ReactNode;
}

export const ViewLayout: React.FC<ViewLayoutProps> = ({ children }) => (
	<div className={container}>{children}</div>
);
