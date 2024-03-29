import { style } from '@vanilla-extract/css';

export const grid = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr 1fr',
	gap: '16px',
});

export const card = style({
	backgroundColor: 'rgba(0,0,0,.04)',
	border: 'none',
	cursor: 'pointer',
	color: 'currentColor',
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
	padding: '24px',
	textAlign: 'left',
	width: '100%',
});

export const imageWrapper = style({
	borderRadius: '100%',
	display: 'flex',
	flexShrink: 0,
	height: '56px',
	overflow: 'hidden',
	width: '56px',
});

export const image = style({
	objectFit: 'cover',
	width: '100%',
});
