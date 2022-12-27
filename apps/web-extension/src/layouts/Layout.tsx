import React, { ReactNode } from 'react';

import { Header } from '../components/Header';
import { User } from '../types/GeneratedTypes';
import { Container } from '../ui/Container';

interface LayoutProps {
	children: ReactNode;
	user?: User;
}

export const Layout: React.FC<LayoutProps> = ({ children, user }) => {
	return (
		<>
			<Header user={user} />
			<main className="relative pt-12 grow">
				<Container>{children}</Container>
			</main>
		</>
	);
};
