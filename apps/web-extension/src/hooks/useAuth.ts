import { useEffect, useState } from 'react';

import { apiClient } from '../utils/api-client';

export function useAuth() {
	const getAuth = () => {
		const isAuthenticated: string | null = localStorage.getItem('isAuthenticated');
		return isAuthenticated ? JSON.parse(isAuthenticated) : false;
	};

	const [isAuth, setAuth] = useState(getAuth());
	const [loading, setLoading] = useState(true);

	const saveAuth = (isAuth: boolean) => {
		localStorage.setItem('isAuthenticated', `${isAuth}`);
		setAuth(isAuth);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await apiClient.get('/auth-verification');

				if (response.data.msg === 'ok') {
					saveAuth(true);
				}
			} catch {
				saveAuth(false);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return {
		setAuth: saveAuth,
		isAuth,
		loading,
	};
}
