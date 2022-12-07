import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
	backdropFilter: 'blur(10px)',
	background: 'rgba(30,30,30,.85)',
	borderRadius: 16,
	bottom: 24,
	left: '50%',
	padding: '8px',
	position: 'fixed',
	transform: 'translate(-50%,0)',
});

export const list = style({
	listStyle: 'none',
});

export const link = recipe({
	base: {
		alignItems: 'center',
		borderRadius: 12,
		color: 'rgba(255,255,255,.5)',
		gap: 12,
		display: 'flex',
		fontSize: 14,
		fontWeight: '400',
		padding: '12px 16px',
		transition: 'all .2s ease-in-out',

		':hover': {
			background: '#2a2a2a',
			color: 'rgba(255,255,255,1)',
		},
	},
	variants: {
		state: {
			active: {
				color: 'rgba(255,255,255,1)',
			},
			inactive: {},
		},
	},
});

export const divider = style({
	backgroundColor: 'currentColor',
	height: '24px',
	opacity: 0.1,
	width: '1px',
});
