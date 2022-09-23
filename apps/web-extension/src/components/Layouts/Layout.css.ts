import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const layout = recipe({
	base: {
		transition: 'all .3s ease',
	},
	variants: {
		state: {
			expanded: {
				padding: '0',
			},
			collapsed: {
				paddingLeft: '240px',

				'@media': {
					'screen and (min-width: 1920px)': {
						paddingLeft: '320px',
					},
				},
			},
		},
	},
	defaultVariants: {
		state: 'expanded',
	},
});

export const main = style({
	position: 'relative',
	padding: '0 96px',

	'@media': {
		'screen and (min-width: 1920px)': {
			padding: '0 144px',
		},
	},
});
