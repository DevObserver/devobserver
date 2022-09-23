import { MenuLink } from '../../types/MenuLink';

export const PrimaryMenuLinks: MenuLink[] = [
	{
		to: '/',
		label: 'For You',
		divider: false,
	},
	{
		to: '/latest',
		label: 'Latest',
		divider: false,
	},
	{
		to: '/releases',
		label: 'Releases',
		divider: false,
	},
	{
		to: '/tech',
		label: 'Tech',
		divider: false,
	},
	{
		to: '/channels',
		label: 'Channels',
		divider: true,
	},
	{
		to: '/saved',
		label: 'Saved',
		divider: false,
	},
];
