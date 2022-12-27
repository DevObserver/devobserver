import React from 'react';

import { User } from '../types/GeneratedTypes';
import { HStack, Text, VStack } from '../ui';
import { button } from '../ui/Button';
import { LinksSocial } from '../utils/links-social';
import { LinksSupport } from '../utils/links-support';
import { signOut } from '../utils/sign-out';

interface UserDropdownProps {
	user: User;
}

export const NavUserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
	return (
		<div className="bg-translucent-white-900 dark:bg-translucent-gray-900 backdrop-blur text-current translate-x-24 right-0 absolute px-12 py-16 min-w-[240px] rounded-16 z-100">
			<VStack as="ul">
				<VStack as="li" className="gap-2 px-12">
					<Text>{user.name}</Text>
					{user.accounts && <Text className="opacity-40">via {user.accounts[0]!.provider!}</Text>}
				</VStack>
				<li>
					<HStack className="px-12">
						<div className="bg-current opacity-10 h-1 w-full my-12"></div>
					</HStack>
				</li>
				{LinksSupport.map((item) => {
					return (
						<li key={item.href}>
							<a
								className={button({ intent: 'ghost', size: 'small' })}
								href={item.href}
								target="_blank"
								rel="noreferrer">
								{item.label}
							</a>
						</li>
					);
				})}
				<li>
					<HStack className="px-12">
						<div className="bg-current opacity-10 h-1 w-full my-12"></div>
					</HStack>
				</li>
				{LinksSocial.map((item) => {
					return (
						<li key={item.href}>
							<a
								className={button({ intent: 'ghost', size: 'small' })}
								href={item.href}
								target="_blank"
								rel="noreferrer">
								{item.label}
							</a>
						</li>
					);
				})}

				<li>
					<HStack className="px-12">
						<div className="bg-current opacity-10 h-1 w-full my-12"></div>
					</HStack>
				</li>
				<li>
					<button className={`${button({ intent: 'ghost', size: 'small' })} w-full`} onClick={signOut}>
						Sign out
					</button>
				</li>
			</VStack>
		</div>
	);
};
