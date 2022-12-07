import * as React from 'react';

export type MenuLink = {
	to?: string;
	href?: string;
	label: string;
	divider: boolean;
	content?: React.ReactNode | string;
};
