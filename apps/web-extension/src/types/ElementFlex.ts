import { alignItems, flexDirection } from '../styles/theme.css';
import { mediaQueryNames } from './MediaQueries';

export type AlignItems = {
	[key in mediaQueryNames]?: keyof typeof alignItems;
};

export type FlexDirection = {
	[key in mediaQueryNames]?: keyof typeof flexDirection;
};
export type JustifyContent = {
	[key in mediaQueryNames]?:
		| 'stretch'
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-around'
		| 'space-between';
};
