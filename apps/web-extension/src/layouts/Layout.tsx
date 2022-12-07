import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Box } from '../ui';
import { Container } from '../ui/Container';
import { main } from './Layout.css';

interface LayoutProps {
	children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { pathname } = useLocation();
	return (
		<>
			<Header />
			<main className={`${main({ state: pathname === '/' ? 'noPadding' : 'withPadding' })}`}>
				<Container>{children}</Container>
			</main>
		</>
	);
};
