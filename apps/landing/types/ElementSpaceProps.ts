import { mediaQueryNames } from '@/types/MediaQueries';

import { theme } from '../theme';

export type ResponsiveSpace = {
	[key in mediaQueryNames]?: keyof typeof theme.space;
};

export enum spaceProps {
	margin = 'margin',
	m = 'm',
	mt = 'mt',
	mr = 'mr',
	mb = 'mb',
	ml = 'ml',
	my = 'my',
	mx = 'mx',
	padding = 'padding',
	p = 'p',
	pt = 'pt',
	pr = 'pr',
	pb = 'pb',
	pl = 'pl',
	py = 'py',
	px = 'px',
}

export type ElementSpaceProps = {
	[key in spaceProps]?: ResponsiveSpace | keyof typeof theme.space;
};
