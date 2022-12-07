import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const feedCard = style({
	backgroundColor: '#222',
	borderRadius: '16px',
	overflow: 'hidden',
	transition: 'all .3s ease',
});

export const feedCardViewed = style({
	opacity: 0.6,

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

export const channelLink = style({
	opacity: 0.6,
	transition: 'all .3s ease',

	':hover': {
		opacity: 1,
	},
});

export const channelImageWrap = style({
	backgroundColor: '#222',
	borderRadius: '100%',
	display: 'flex',
	height: 20,
	overflow: 'hidden',
	width: 20,
});

export const channelImage = style({
	borderRadius: '100%',
	objectFit: 'cover',
	height: 20,
	width: 20,
});

export const textWrapper = style({
	flexGrow: '1',
	padding: '24px',
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

export const saveFeed = style({
	alignItems: 'center',
	appearance: 'none',
	background: 'none',
	border: 'none',
	color: 'currentColor',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'flex-end',
	opacity: 0.5,
	transition: 'all .3s ease',

	':hover': {
		opacity: 1,
	},
});

export const saveFeedIcon = style({
	height: 18,
	width: 18,
});
