import { gql, useApolloClient } from '@apollo/client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { UserFragment } from '../../api/authenticated/fragments/user';
import { ReactComponent as Logo } from '../../assets/do-logo.svg';
import { Box, Flex } from '../../ui';
import { Container } from '../../ui/Container';
import { NavFeeds } from '../NavFeeds/NavFeeds';
import { NavUser } from '../NavUser/NavUser';
import { UserDropdown } from '../UserDropdown/UserDropdown';
import { grid, header, logo } from './Header.css';

const READ_USER = gql`
	${UserFragment}

	query ReadUser {
		user {
			...UserFragment
		}
	}
`;

const allowedPaths = ['/', '/latest', '/releases', '/tech', '/configure'];

export const Header = () => {
	const { pathname } = useLocation();
	const client = useApolloClient();
	const { user } = client.readQuery({
		query: READ_USER,
	});

	return (
		<Box as="header" py={{ mobile: 12, tablet: 16 }} className={header}>
			<Container className={grid}>
				<Link className={logo} to="/">
					<Logo />
				</Link>

				{user && allowedPaths.includes(pathname) && <NavFeeds />}

				<Flex alignItems="center" justifyContent="flex-end" gap={24}>
					{user && <NavUser gap={24} />}
					<UserDropdown user={user} />
				</Flex>
			</Container>
		</Box>
	);
};
