import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
	variants: {
		variant: {
			primary: {
				alignItems: 'center',
				backgroundColor: '#181818',
				border: 'solid 1px #181818',
				borderRadius: '4px',
				color: '#fff',
				cursor: 'pointer',
				display: 'flex',
				fontSize: '14px',
				fontWeight: '700',
				padding: '8px 32px',

				'@media': {
					'(prefers-color-scheme: dark)': {
						backgroundColor: '#fff',
						border: 'solid 1px #fff',
						color: '#181818',
					},
				},
			},
			secondary: {
				alignItems: 'center',
				backgroundColor: 'transparent',
				border: 'solid 1px currentColor',
				borderRadius: '4px',
				color: 'currentColor',
				cursor: 'pointer',
				display: 'flex',
				fontSize: '14px',
				fontWeight: '700',
				gap: '12px',
				padding: '8px 32px',

				'@media': {
					'(prefers-color-scheme: dark)': {
						border: 'solid 1px #fff',
						color: '#fff',
					},
				},
			},
			ghost: {
				alignItems: 'center',
				background: 'none',
				border: 'none',
				color: 'currentColor',
				cursor: 'pointer',
				display: 'flex',
			},
		},
	},
});
