import { style } from '@vanilla-extract/css';

export const userDropdown = style({
	background: '#fff',
	boxShadow: '0 8px 16px -8px rgba(0,0,0,.15)',
	borderRadius: '16px',
	minWidth: 240,
	padding: '16px 12px',
	position: 'absolute',
	right: 0,
	top: 'calc(100% + 24px)',
	zIndex: 100,

	'@media': {
		'(prefers-color-scheme: dark)': {
			background: '#111',
			color: '#fff',
		},
	},
});

export const button = style({
	alignItems: 'center',
	appearance: 'none',
	background: 'none',
	border: 'none',
	borderRadius: 8,
	color: 'rgba(255,255,255,.5)',
	cursor: 'pointer',
	display: 'flex',
	fontSize: 14,
	fontWeight: '400',
	gap: 12,
	opacity: 1,
	padding: '6px 12px',
	transition: 'all .2s ease-in-out',
	width: '100%',

	':hover': {
		background: '#2a2a2a',
		color: 'rgba(255,255,255,1)',
		opacity: 1,
	},
});

export const divider = style({
	backgroundColor: 'currentColor',
	opacity: 0.1,
	height: '1px',
	margin: '12px 0',
	width: '100%',
});
