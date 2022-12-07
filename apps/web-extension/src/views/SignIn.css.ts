import { style } from '@vanilla-extract/css';

export const container = style({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	minHeight: '100vh',
	minWidth: '100%',
});

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
	maxWidth: '480px',
	margin: '0 0 24px',
});

export const list = style({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	gap: '12px',
});

export const footer = style({
	bottom: 0,
	left: '50%',
	padding: '24px',
	position: 'absolute',
	transform: 'translate(-50%, 0)',
});

export const footerLink = style({
	textDecoration: 'underline',

	':hover': {
		textDecoration: 'none',
	},
});
