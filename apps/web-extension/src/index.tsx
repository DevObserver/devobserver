import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';

import { App } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MemoryRouter>
			<App />
		</MemoryRouter>
	</React.StrictMode>
);
