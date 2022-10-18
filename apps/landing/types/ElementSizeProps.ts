import { mediaQueryNames } from '@/types/MediaQueries';

import { theme } from '../theme';

export type ResponsiveSize = {
	[key in mediaQueryNames]?: keyof typeof theme.sizes;
};

export enum sizeProps {
	height = 'height',
	maxHeight = 'maxHeight',
	minHeight = 'minHeight',
	width = 'width',
	maxWidth = 'maxWidth',
	minWidth = 'minWidth',
}

export type ElementSizeProps = {
	[key in sizeProps]?: ResponsiveSize | keyof typeof theme.sizes;
};
