import React from 'react';
import { NavLink } from 'react-router-dom';

import { HStack } from '../ui';
import { button } from '../ui/Button';
import { LinksUser } from '../utils/links-user';

export const NavUser = () => {
	return (
		<HStack as="nav" alignItems="center" justifyContent="center">
			<HStack as="ul" className="gap-2" alignItems="center" justifyContent="center">
				{LinksUser.map((item) => {
					return (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								button({ intent: 'secondary', size: 'small', state: isActive ? 'active' : 'default' })
							}>
							{item.content}
						</NavLink>
					);
				})}
			</HStack>
		</HStack>
	);
};
