import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuLink } from '../../types/MenuLink';
import { Box, Flex } from '../../ui';
import { button } from '../../ui/Button.css';
import { LinksFeed } from '../../utils/links-feed';
import { container, divider, list } from './NavFeeds.css';

export const NavFeeds = () => {
	return (
		<Box className={container} padding={12}>
			<Flex as="nav" alignItems="center" justifyContent="center">
				<Flex as="ul" className={list} alignItems="center" justifyContent="center" gap={4}>
					{LinksFeed.map((item: MenuLink) => {
						return (
							<>
								{item.divider && <span className={divider} />}
								<NavLink
									key={item.to}
									to={item.to!}
									title={item.label}
									className={({ isActive }) =>
										button({ variant: 'ghost', state: isActive ? 'active' : 'inactive', radius: 'large' })
									}>
									{item.content}
								</NavLink>
							</>
						);
					})}
				</Flex>
			</Flex>
		</Box>
	);
};
