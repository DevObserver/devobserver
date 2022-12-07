import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const nav = style({
	display: 'flex',
	justifyContent: 'center',
});

export const menuList = style({
	listStyle: 'none',
});

export const listItem = style({
	display: 'flex',
	alignItems: 'center',
	marginTop: '16px',
});

export const link = recipe({
	base: {
		display: 'flex',
		alignItems: 'center',
		fontWeight: '600',
		opacity: 0.4,

		':hover': {
			opacity: 1,
		},
	},
	variants: {
		state: {
			active: {
				opacity: 1,
			},
			inactive: {
				opacity: 0.4,
			},
		},
	},
});
