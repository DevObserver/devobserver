import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const headerToggle = recipe({
	base: {
		alignItems: 'center',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		color: 'currentColor',
		gap: '4px',
		height: 'calc(100% - 176px)',
		opacity: 0.15,
		padding: '0 12px',
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		transition: 'all .3s ease',

		':hover': {
			opacity: 0.65,
		},
	},

	variants: {
		position: {
			right: {
				left: '100%',
			},
			center: {
				left: '50%',
			},
		},
	},

	defaultVariants: {
		position: 'right',
	},
});

export const line = style({
	backgroundColor: 'currentColor',
	flexGrow: '1',
	width: '1px',
});

export const icon = style({
	background: 'none',
	color: 'currentColor',
	fontSize: '32px',
	padding: '24px',
});
