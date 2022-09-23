import React from 'react';

import { MenuLink } from '../../types/MenuLink';
import { menuList } from './Menu.css';
import { MenuItem } from './MenuItem';

interface MenuProps {
	links: MenuLink[];
}

export const Menu: React.FC<MenuProps> = ({ links }) => {
	return (
		<nav>
			<ul className={menuList}>
				{links.map((link: MenuLink) => {
					return <MenuItem key={link.to} link={link} />;
				})}
			</ul>
		</nav>
	);
};
