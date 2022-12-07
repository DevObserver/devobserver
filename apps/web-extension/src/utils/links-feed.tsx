import { ReactComponent as SliderIcon } from '../assets/slider.svg';
import { MenuLink } from '../types/MenuLink';

export const LinksFeed: MenuLink[] = [
	{
		to: '/',
		label: 'For You',
		content: 'For You',
		divider: false,
	},
	{
		to: '/latest',
		label: 'Latest',
		content: 'Latest',
		divider: false,
	},
	{
		to: '/releases',
		label: 'Releases',
		content: 'Releases',
		divider: false,
	},
	{
		to: '/tech',
		label: 'Tech',
		content: 'Tech',
		divider: false,
	},
	{
		to: '/configure',
		label: 'Configure',
		content: <SliderIcon />,
		divider: true,
	},
];
