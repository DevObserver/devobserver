import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/do-logo.svg';
import { User } from '../../types/GeneratedTypes';
import { Menu } from '../Menu/Menu';
import { PrimaryMenuLinks } from '../Menu/PrimaryMenuLinks';
import { SecondaryMenuLinks } from '../Menu/SecondaryMenuLinks';
import { DropdownMenu } from '../MenuDropdown/DropdownMenu';
import { header, row } from './Header.css';
import { HeaderToggle } from './HeaderToggle';

interface HeaderProps {
	user?: User;
	headerOpened: boolean;
	toggleHeader: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, headerOpened, toggleHeader }) => {
	return (
		<header className={header({ state: headerOpened ? 'opened' : 'closed' })}>
			<div className={row}>
				<Link to="/">
					<Logo />
				</Link>

				{user && headerOpened && <Menu links={PrimaryMenuLinks} />}
			</div>

			<div className={row}>{headerOpened && <Menu links={SecondaryMenuLinks} />}</div>

			<div className={row}>
				<DropdownMenu user={user} headerOpened={headerOpened} />
			</div>

			<HeaderToggle toggle={toggleHeader} isOpened={headerOpened} />
		</header>
	);
};
