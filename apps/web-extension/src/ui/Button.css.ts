import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
	variants: {
		variant: {
			primary: {
				alignItems: 'center',
				backgroundColor: '#181818',
				border: 'solid 1px #181818',
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
				appearance: 'none',
				alignItems: 'center',
				background: 'none',
				border: 'none',
				color: 'rgba(255,255,255,.5)',
				cursor: 'pointer',
				display: 'flex',
				fontSize: 14,
				fontWeight: '400',
				gap: 12,
				padding: '12px 16px',
				transition: 'all .2s ease-in-out',

				':hover': {
					background: '#2a2a2a',
					color: 'rgba(255,255,255,1)',
				},
			},
		},
		state: {
			active: {
				color: 'rgba(255,255,255,1)',
			},
			inactive: {},
		},
		radius: {
			small: {
				borderRadius: 4,
			},
			medium: {
				borderRadius: 8,
			},
			large: {
				borderRadius: 12,
			},
			rounded: {
				borderRadius: '100%',
			},
		},
	},
});
