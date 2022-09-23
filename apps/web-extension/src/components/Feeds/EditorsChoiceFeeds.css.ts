import { style } from '@vanilla-extract/css';

export const grid = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	width: '100%',
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
