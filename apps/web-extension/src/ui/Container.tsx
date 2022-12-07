import React, { FC } from 'react';

import { Box } from './Box';
import { container } from './Container.css';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
	return (
		<Box
			px={{ mobile: 12, mobileLarge: 16, tablet: 24, desktop: 96 }}
			className={`${className || ''} ${container}`}>
			{children}
		</Box>
	);
};
