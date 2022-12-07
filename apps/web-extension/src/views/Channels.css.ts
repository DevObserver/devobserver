import { style } from '@vanilla-extract/css';

export const footer = style({
	alignItems: 'center',
	backdropFilter: 'blur(10px)',
	background: 'rgba(30,30,30,.85)',
	borderRadius: 16,
	bottom: 96,
	display: 'flex',
	gap: 12,
	left: '50%',
	padding: '8px',
	position: 'fixed',
	transform: 'translate(-50%,0)',

	// '@media': {
	// 	'(prefers-color-scheme: dark)': {
	// 		backgroundColor: '#181818',
	// 		color: '#181818',
	// 	},
	// },
});
