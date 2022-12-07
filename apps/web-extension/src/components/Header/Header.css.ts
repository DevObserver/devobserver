import { style } from '@vanilla-extract/css';

export const header = style({
	left: 0,
	position: 'fixed',
	top: 0,
	transition: 'width .2s ease',
	width: '100%',
	zIndex: 100,

	'::before': {
		backdropFilter: 'blur(10px)',
		background: 'rgba(24,24,24,.85)',
		content: '',
		display: 'block',
		height: '100%',
		left: 0,
		position: 'absolute',
		top: 0,
		width: '100%',
		zIndex: -1,
	},
});

export const grid = style({
	alignItems: 'center',
	display: 'grid',
	gap: '48px',
	gridTemplateColumns: '48px 1fr',
});

export const logo = style({
	alignItems: 'center',
	display: 'flex',
});
