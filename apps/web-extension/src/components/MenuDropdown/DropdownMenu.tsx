import React, { useState } from 'react';

import { ReactComponent as Icon } from '../../assets/signIn.svg';
import { User } from '../../types/GeneratedTypes';
import { RouterLink } from '../Elements/RouterLink';
import { UserDropdown } from '../UserDropdown/UserDropdown';
import { signInButton, userButton, userButtonContainer, userImage } from './DropdownMenu.css';

interface DropdownMenu {
	user?: User;
	headerOpened: boolean;
}

export const DropdownMenu: React.FC<DropdownMenu> = ({ user, headerOpened }) => {
	const [isVisible, setVisibility] = useState(false);

	const openDropdown = () => setVisibility(!isVisible);
	const closeDropdown = () => {
		setTimeout(() => {
			setVisibility(false);
		}, 300);
	};

	return (
		<div>
			{user ? (
				<div className={userButtonContainer}>
					<button className={userButton} onClick={openDropdown} onBlur={closeDropdown}>
						{user.image && <img src={user.image} className={userImage} alt="Profile image" />}
					</button>
					{isVisible && <UserDropdown user={user} />}
				</div>
			) : (
				<RouterLink to="/sign-in" className={signInButton}>
					{headerOpened ? <span>Sign In</span> : <Icon width="32" height="32" />}
				</RouterLink>
			)}
		</div>
	);
};
