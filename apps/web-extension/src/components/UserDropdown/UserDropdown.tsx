import React from 'react';

import { User } from '../../types/GeneratedTypes';
import { signOut } from '../../utils/sign-out';
import { Button, Flex, Text } from '../Elements';
import { divider, userDropdown } from './UserDropdown.css';

interface UserDropdownProps {
	user: User;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
	return (
		<div className={userDropdown}>
			<Flex as="ul" flexDirection="column" gap={4}>
				<Flex as="li" flexDirection="column" gap={2}>
					<Text>{user.name}</Text>
					<Text opacity={0.4}>{user.email}</Text>
				</Flex>
				<li>
					<div className={divider}></div>
				</li>
				<li>
					<Button variant="ghost" onClick={signOut}>
						Sign out
					</Button>
				</li>
			</Flex>
		</div>
	);
};
