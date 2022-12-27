import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuLink } from '../types/MenuLink';
import { HStack } from '../ui';
import { button } from '../ui/Button';
import { LinksFeed } from '../utils/links-feed';

export const NavFeeds = () => {
	return (
		<HStack className="bg-[rgba(30,30,30,.85)] rounded-16 backdrop-blur bottom-24 left-1/2 -translate-x-1/2 fixed p-12">
			<HStack as="nav" alignItems="center" justifyContent="center">
				<HStack as="ul" className="gap-4" alignItems="center" justifyContent="center">
					{LinksFeed.map((item: MenuLink) => {
						return (
							<>
								{item.divider && <span className="bg-currentColor h-24 w-1 opacity-10" />}
								<NavLink
									key={item.to}
									to={item.to!}
									title={item.label}
									className={({ isActive }) => button({ intent: 'ghost', size: 'small' })}>
									{item.content}
								</NavLink>
							</>
						);
					})}
				</HStack>
			</HStack>
		</HStack>
	);
};
