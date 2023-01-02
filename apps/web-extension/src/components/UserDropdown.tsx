import React, { FC, useState } from 'react';

import { User } from '../types/GeneratedTypes';
import { button } from '../ui/Button';
import { LinksSocial } from '../utils/links-social';
import { NavUserDropdown } from './NavUserDropdown';

interface UserDropdown {
	user?: User;
}

export const UserDropdown: FC<UserDropdown> = ({ user }) => {
	const [isVisible, setVisibility] = useState(false);

	const openDropdown = () => setVisibility(!isVisible);
	const closeDropdown = () => {
		setTimeout(() => {
			setVisibility(false);
		}, 100);
	};

	return (
		<div>
			{user ? (
				<div className="relative w-32">
					<button
						className="appearance-none bg-transparent border-none rounded-16 cursor-pointer flex h-32 w-32 overflow-hidden"
						onClick={openDropdown}
						onBlur={closeDropdown}>
						{user.image && <img src={user.image} className="object-cover w-full" alt="Profile image" />}
					</button>
					{isVisible && <NavUserDropdown user={user} />}
				</div>
			) : (
				<ul className="flex gap-4">
					{LinksSocial.map((item) => {
						return (
							<li key={item.href}>
								<a
									className={button({ intent: 'secondary', size: 'small', state: 'default' })}
									href={item.href}
									target="_blank"
									rel="noreferrer">
									{item.label}
								</a>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
