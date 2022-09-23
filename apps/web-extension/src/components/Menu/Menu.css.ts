import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const menuList = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	listStyle: 'none',
});

export const listItem = style({
	marginTop: '16px',
});

export const link = recipe({
	base: {
		display: 'block',
		fontWeight: '700',
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
