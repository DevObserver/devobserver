import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/do-logo.svg';
import { User } from '../types/GeneratedTypes';
import { HStack } from '../ui';
import { Container } from '../ui/Container';
import { NavPrimary } from './NavPrimary';
import { NavUser } from './NavUser';
import { UserDropdown } from './UserDropdown';

const allowedPaths = ['/', '/latest', '/releases', '/tech', '/configure'];

interface HeaderProps {
	user?: User;
}

export const Header: FC<HeaderProps> = ({ user }) => {
	const { pathname } = useLocation();

	return (
		<HStack as="header" className="left-0 top-0 sticky width-full z-100 py-16">
			<div className="bg-translucent-white-1000 dark:bg-translucent-gray-1000 backdrop-blur absolute top-0 left-0 h-full w-full"></div>
			<Container className="grid grid-cols-[48px_1fr] gap-48 relative">
				<Link className="flex items-center" to="/">
					<Logo />
				</Link>

				{user && allowedPaths.includes(pathname) && <NavPrimary />}

				<HStack className="gap-24" alignItems="center" justifyContent="flexEnd">
					{user && <NavUser />}
					<UserDropdown user={user} />
				</HStack>
			</Container>
		</HStack>
	);
};
