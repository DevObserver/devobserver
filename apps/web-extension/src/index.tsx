import './styles/index.css';
import './styles/tailwind.css';

import * as process from 'process';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { App } from './app';

const hostname = window.location.hostname;
const isWeb = process.env.VITE_BASE_URL?.includes(hostname);
const Router = isWeb ? BrowserRouter : MemoryRouter;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
