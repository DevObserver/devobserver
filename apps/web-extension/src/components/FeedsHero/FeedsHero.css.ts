import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	justifyContent: 'center',
	minHeight: 920,
	maxHeight: 1280,
});

export const grid = style({
	display: 'grid',
	gridTemplateColumns: '45% calc(55% - 24px)',
	gap: 24,
	width: '100%',
});

export const leftGrid = style({
	display: 'grid',
	gridTemplateRows: '1fr',
	gap: 24,
});

export const rightGrid = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: 24,
});

export const feedCard = style({});

export const imageWrapper = style({
	selectors: {
		[`${feedCard}:first-child &`]: {
			borderTopLeftRadius: '8px',
			borderBottomLeftRadius: '8px',
			overflow: 'hidden',
		},
		[`${feedCard}:last-child &`]: {
			borderTopRightRadius: '8px',
			borderBottomRightRadius: '8px',
			overflow: 'hidden',
		},
	},
});
