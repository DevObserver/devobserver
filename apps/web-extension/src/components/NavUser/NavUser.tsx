import React from 'react';
import { NavLink } from 'react-router-dom';

import { vars } from '../../styles/theme.css';
import { ResponsiveSpace } from '../../types/ElementBase';
import { Flex } from '../../ui';
import { LinksUser } from '../../utils/links-user';
import { link, menuList } from './NavUser.css';

interface MenuProps {
	gap?: ResponsiveSpace | keyof typeof vars.space;
}

export const NavUser: React.FC<MenuProps> = ({ gap }) => {
	return (
		<Flex as="nav" alignItems="center" justifyContent="center">
			<Flex as="ul" alignItems="center" justifyContent="center" gap={gap} className={menuList}>
				{LinksUser.map((item) => {
					return (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) => link({ state: isActive ? 'active' : 'inactive' })}>
							{item.content}
						</NavLink>
					);
				})}
			</Flex>
		</Flex>
	);
};
