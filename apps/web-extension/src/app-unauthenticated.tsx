import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layouts/Layout';
import { Home } from './views-unauthenticated/Home';
import { SignIn } from './views-unauthenticated/SignIn';

type AppUnauthenticatedProps = {
	headerOpened: boolean;
	toggleHeader: () => void;
};

export const AppUnauthenticated: React.FC<AppUnauthenticatedProps> = ({ headerOpened, toggleHeader }) => {
	return (
		<Layout headerOpened={headerOpened} toggleHeader={toggleHeader}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<SignIn />} />
			</Routes>
		</Layout>
	);
};
