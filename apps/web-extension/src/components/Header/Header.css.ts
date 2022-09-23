import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const header = recipe({
	base: {
		display: 'grid',
		gap: '48px',
		gridTemplateRows: '1fr auto 32px',
		height: '100%',
		left: 0,
		padding: '32px',
		position: 'fixed',
		top: 0,
		transition: 'width .2s ease',
		width: '96px',
		zIndex: 100,

		'@media': {
			'screen and (min-width: 1920px)': {
				padding: '32px 56px',
				width: '320px',
			},
		},
	},
	variants: {
		state: {
			opened: {
				width: '240px',

				'@media': {
					'screen and (min-width: 1920px)': {
						width: '320px',
					},
				},
			},
			closed: {
				width: '96px',

				'@media': {
					'screen and (min-width: 1920px)': {
						width: '144px',
					},
				},
			},
		},
	},
	defaultVariants: {
		state: 'opened',
	},
});

export const row = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '48px',

	selectors: {
		'&:last-of-type': {
			justifyContent: 'flex-end',
		},
	},
});
