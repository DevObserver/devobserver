import React from 'react';

import { headerToggle, icon, line } from './HeaderToggle.css';

interface HeaderToggleProps {
	toggle: () => void;
	isOpened: boolean;
}

export const HeaderToggle: React.FC<HeaderToggleProps> = ({ toggle, isOpened }) => {
	return (
		<button className={headerToggle({ position: isOpened ? 'right' : 'center' })} onClick={toggle}>
			<span className={line} />
			<span className={icon}>{isOpened ? '-' : '+'}</span>
			<span className={line} />
		</button>
	);
};
