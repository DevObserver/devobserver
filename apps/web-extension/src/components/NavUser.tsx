import React from 'react';
import { NavLink } from 'react-router-dom';

import { HStack } from '../ui';
import { LinksUser } from '../utils/links-user';

export const NavUser = () => {
	return (
		<HStack as="nav" alignItems="center" justifyContent="center">
			<HStack as="ul" className="gap-24" alignItems="center" justifyContent="center">
				{LinksUser.map((item) => {
					return (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								`flex items-center font-600 ${isActive ? 'opacity-100' : 'opacity-40'}`
							}>
							{item.content}
						</NavLink>
					);
				})}
			</HStack>
		</HStack>
	);
};
