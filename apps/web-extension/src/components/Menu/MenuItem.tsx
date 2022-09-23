import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuLink as LinkType } from '../../types/MenuLink';
import { link, listItem } from './Menu.css';

interface MenuItemProps {
	link: LinkType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ link: menuItem }) => {
	return (
		<li className={`${menuItem.divider ? listItem : ''}`}>
			{menuItem.to ? (
				<NavLink
					to={menuItem.to}
					className={({ isActive }) => (isActive ? link({ state: 'active' }) : link({ state: 'inactive' }))}>
					{menuItem.label}
				</NavLink>
			) : (
				<a href={menuItem.href} target="_blank" rel="noreferrer" className={link()}>
					{menuItem.label}
				</a>
			)}
		</li>
	);
};
