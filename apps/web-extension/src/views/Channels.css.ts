import { style } from '@vanilla-extract/css';

export const footer = style({
	backgroundColor: 'rgba(255,255,255,.9)',
	bottom: 0,
	display: 'flex',
	gap: '24px',
	justifyContent: 'center',
	left: '260px',
	padding: '16px 24px',
	position: 'fixed',
	width: 'calc(100% - 356px)',

	'@media': {
		'(prefers-color-scheme: dark)': {
			backgroundColor: '#181818',
			color: '#181818',
		},
	},
});
