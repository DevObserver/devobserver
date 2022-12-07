import { recipe } from '@vanilla-extract/recipes';

export const main = recipe({
	base: {
		position: 'relative',
	},
	variants: {
		state: {
			withPadding: {
				paddingTop: '64px !important',
			},
			noPadding: {},
		},
	},
});
