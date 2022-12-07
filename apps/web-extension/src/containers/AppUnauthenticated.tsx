import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
import { Home } from '../views/Home';
import { SignIn } from '../views/SignIn';

export const AppUnauthenticated = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<SignIn />} />
			</Routes>
		</Layout>
	);
};
