import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { ReactComponent as ClocksIcon } from '../assets/clocks.svg';
// import { ReactComponent as SearchIcon } from '../../assets/search.svg';
// import { MenuLink } from '../types/MenuLink';

const iconStyle = {
	height: 16,
	width: 16,
};

export const LinksUser = [
	{
		to: '/saved',
		label: 'Saved Feeds',
		content: <BookmarkIcon style={iconStyle} />,
		divider: false,
	},
	{
		to: '/history',
		label: 'History',
		content: <ClocksIcon style={iconStyle} />,
		divider: false,
	},
	// {
	// 	to: '/search',
	// 	label: 'Search',
	// 	content: <SearchIcon style={iconStyle} />,
	// 	divider: false,
	// },
];
