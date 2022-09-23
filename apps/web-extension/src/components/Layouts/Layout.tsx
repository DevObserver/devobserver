import React, { ReactNode } from 'react';

import { User } from '../../types/GeneratedTypes';
import { Header } from '../Header/Header';
import { layout, main } from './Layout.css';

interface LayoutProps {
	children: ReactNode;
	user?: User;
	headerOpened: boolean;
	toggleHeader: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, headerOpened, toggleHeader }) => {
	return (
		<div className={layout({ state: headerOpened ? 'collapsed' : 'expanded' })}>
			<Header user={user} headerOpened={headerOpened} toggleHeader={toggleHeader} />
			<main className={main}>{children}</main>
		</div>
	);
};
