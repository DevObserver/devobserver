import { style } from '@vanilla-extract/css';

export const userButtonContainer = style({
	position: 'relative',
	width: '32px',
});

export const userButton = style({
	borderRadius: '16px',
	display: 'flex',
	height: '32px',
	overflow: 'hidden',
	padding: 0,
	width: '32px',
});

export const userImage = style({
	objectFit: 'cover',
	width: '100%',
});

export const signInButton = style({
	borderRadius: 0,
	color: 'currentColor',
	fontSize: '14px',
	cursor: 'pointer',
	fontWeight: '700',
});
