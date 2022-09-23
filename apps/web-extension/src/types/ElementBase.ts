import { ReactNode } from 'react';

import { vars } from '../theme.css';
import { mediaQueryNames } from './MediaQueries';

export type ResponsiveSpace = {
	[key in mediaQueryNames]?: keyof typeof vars.space;
};

export type ResponsiveDisplay = {
	[key in mediaQueryNames]?: keyof typeof vars.display;
};

export enum elementSpacePropsList {
	mt = 'mt',
	mr = 'mr',
	mb = 'mb',
	ml = 'ml',
	pt = 'pt',
	pr = 'pr',
	pb = 'pb',
	pl = 'pl',
}

export type ElementSpaceProps = {
	[key in elementSpacePropsList]?: ResponsiveSpace | keyof typeof vars.space;
};

export type ElementCommonProps = {
	children: ReactNode;
	className?: string;
	opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
};
