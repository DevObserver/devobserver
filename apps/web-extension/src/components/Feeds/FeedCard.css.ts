import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const feedCard = style({
	transition: 'all .3s ease',
});

export const feedCardViewed = style({
	opacity: 0.4,

	':hover': {
		opacity: 1,
	},
});

export const imageWrapper = recipe({
	base: {
		display: 'flex',
		backgroundColor: 'rgba(0,0,0,.1)',
		overflow: 'hidden',
	},
	variants: {
		variant: {
			small: {
				aspectRatio: '9/5',
				borderRadius: '8px',
			},
			medium: {
				aspectRatio: '9/6',
			},
			large: {
				aspectRatio: '9/6',
			},
		},
	},
});

export const image = style({
	objectFit: 'cover',
	opacity: 0.9,
	transition: 'all .3s ease',
	width: '100%',

	selectors: {
		[`${feedCard}:hover &`]: {
			scale: '1.05 1.05',
		},
	},
});

export const line = style({
	margin: '0',
	minWidth: 0,
	backgroundColor: 'currentColor',
	height: '1px',
	opacity: 0.6,
	width: '24px',
});

export const dot = style({
	backgroundColor: 'currentColor',
	borderRadius: '2px',
	height: '4px',
	width: '4px',
});
