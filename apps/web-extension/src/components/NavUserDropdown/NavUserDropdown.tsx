import React from 'react';

import { User } from '../../types/GeneratedTypes';
import { Box, Flex, Text } from '../../ui';
import { LinksSocial } from '../../utils/links-social';
import { LinksSupport } from '../../utils/links-support';
import { signOut } from '../../utils/sign-out';
import { button, divider, userDropdown } from './NavUserDropdown.css';

interface UserDropdownProps {
	user: User;
}

export const NavUserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
	return (
		<div className={userDropdown}>
			<Flex as="ul" flexDirection="column" gap={0}>
				<Flex as="li" flexDirection="column" gap={2} pl={12} pr={12}>
					<Text>{user.name}</Text>
					{user.accounts && <Text opacity={0.4}>via {user.accounts[0]!.provider!}</Text>}
				</Flex>
				<li>
					<Box pl={12} pr={12}>
						<div className={divider}></div>
					</Box>
				</li>
				{LinksSupport.map((item) => {
					return (
						<li key={item.href}>
							<a className={button} href={item.href} target="_blank" rel="noreferrer">
								{item.label}
							</a>
						</li>
					);
				})}
				<li>
					<Box pl={12} pr={12}>
						<div className={divider}></div>
					</Box>
				</li>
				{LinksSocial.map((item) => {
					return (
						<li key={item.href}>
							<a className={button} href={item.href} target="_blank" rel="noreferrer">
								{item.label}
							</a>
						</li>
					);
				})}

				<li>
					<Box pl={12} pr={12}>
						<div className={divider}></div>
					</Box>
				</li>
				<li>
					<button className={button} onClick={signOut}>
						Sign out
					</button>
				</li>
			</Flex>
		</div>
	);
};
