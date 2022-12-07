import React, { FC, useState } from 'react';

import { User } from '../../types/GeneratedTypes';
import { RouterLink } from '../../ui/RouterLink';
import { NavUserDropdown } from '../NavUserDropdown/NavUserDropdown';
import { signInButton, userButton, userButtonContainer, userImage } from './UserDropdown.css';

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
				<div className={userButtonContainer}>
					<button className={userButton} onClick={openDropdown} onBlur={closeDropdown}>
						{user.image && <img src={user.image} className={userImage} alt="Profile image" />}
					</button>
					{isVisible && <NavUserDropdown user={user} />}
				</div>
			) : (
				<RouterLink to="/sign-in" className={signInButton}>
					<span>Sign In</span>
				</RouterLink>
			)}
		</div>
	);
};
