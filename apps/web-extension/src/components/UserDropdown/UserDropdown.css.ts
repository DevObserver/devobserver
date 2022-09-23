import { style } from '@vanilla-extract/css';

export const userDropdown = style({
	background: '#fff',
	boxShadow: '0 8px 16px -8px rgba(0,0,0,.15)',
	bottom: 0,
	left: 'calc(100% + 12px)',
	position: 'absolute',
	padding: '12px',
	zIndex: 100,

	'@media': {
		'(prefers-color-scheme: dark)': {
			background: '#111',
			color: '#fff',
		},
	},
});

export const divider = style({
	backgroundColor: 'currentColor',
	opacity: 0.1,
	height: '1px',
	margin: '8px 0',
	width: '100%',
});
