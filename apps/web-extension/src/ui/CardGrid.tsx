import { FC } from 'react';

interface CardGridProps {
	children: React.ReactNode;
}

export const CardGrid: FC<CardGridProps> = ({ children }) => {
	return (
		<div className="grid gap-24 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
			{children}
		</div>
	);
};
