import React, { FC } from 'react';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
	return (
		<div className={`px-12 xs:px-16 md:px-24 lg:px-96 max-w-1960 mx-auto w-full ${className || ''}`}>
			{children}
		</div>
	);
};
