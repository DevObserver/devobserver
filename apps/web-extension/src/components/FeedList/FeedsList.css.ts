import { style } from '@vanilla-extract/css';

export const header = style({
	marginBottom: '24px',
});

export const heading = style({
	fontWeight: 800,
	textTransform: 'uppercase',
});

export const titleLine = style({
	backgroundColor: 'currentColor',
	height: '1px',
	opacity: 0.4,
	width: '48px',
});

export const list = style({
	display: 'grid',
	gap: '24px',
	gridTemplateColumns: '1fr',
	width: '100%',

	'@media': {
		'screen and (min-width: 768px)': {
			gap: '24px',
			gridTemplateColumns: '1fr 1fr',
		},
		'screen and (min-width: 1280px)': {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		'screen and (min-width: 1440px)': {
			gridTemplateColumns: '1fr 1fr 1fr 1fr',
		},
	},
});
