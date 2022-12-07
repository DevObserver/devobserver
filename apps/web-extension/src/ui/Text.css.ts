import { recipe } from '@vanilla-extract/recipes';

export const text = recipe({
	variants: {
		size: {
			xLarge: {
				fontSize: '18px',
				lineHeight: '18px',
			},
			large: {
				fontSize: '16px',
				lineHeight: '24px',
			},
			base: {
				fontSize: '14px',
				lineHeight: '20px',
			},
			small: {
				fontSize: '12px',
				lineHeight: '16px',
			},
		},
		align: {
			left: {
				textAlign: 'left',
			},
			center: {
				textAlign: 'center',
			},
			right: {
				textAlign: 'right',
			},
		},
	},
});
