import { createGlobalTheme } from '@vanilla-extract/css';

export const colors = {
	white: '#fff',
	'gray-50': '#f5f5f5',
	'gray-100': '#f0f0f0',
	'gray-200': '#d8d8d8',
	'gray-300': '#c0c0c0',
	'gray-400': '#a8a8a8',
	'gray-500': '#909090',
	'gray-600': '#787878',
	'gray-700': '#606060',
	'gray-800': '#484848',
	'gray-900': '#303030',
	'gray-1000': '#181818',
};

export const space = {
	0: '0',
	1: '1px',
	2: '2px',
	4: '4px',
	8: '8px',
	12: '12px',
	16: '16px',
	20: '20px',
	24: '24px',
	28: '28px',
	32: '32px',
	36: '36px',
	40: '40px',
	44: '44px',
	48: '48px',
	52: '52px',
	56: '56px',
	64: '64px',
	96: '96px',
};

export const alignItems = {
	center: 'center',
	flexEnd: 'flex-end',
	flexStart: 'flex-start',
	stretch: 'stretch',
};

export const flexDirection = {
	row: 'row',
	column: 'column',
};

export const justifyContent = {
	stretch: 'stretch',
	flexStart: 'flex-start',
	center: 'center',
	flexEnd: 'flex-end',
	spaceAround: 'space-around',
	spaceBetween: 'space-between',
};

export const fontSize = {
	12: '12px',
	14: '14px',
	16: '16px',
	18: '18px',
	20: '20px',
	24: '24px',
	28: '28px',
	32: '32px',
	36: '36px',
	40: '40px',
	44: '44px',
	48: '48px',
	52: '52px',
	56: '56px',
	72: '72px',
	96: '96px',
	120: '120px',
};

export const lineHeight = {
	1: '1',
	16: '16px',
	20: '20px',
	24: '24px',
	28: '28px',
	32: '32px',
	36: '36px',
	40: '40px',
	44: '44px',
	48: '48px',
	52: '52px',
	56: '56px',
	60: '60px',
	64: '64px',
};

export const textAlign = {
	left: 'left',
	center: 'center',
	right: 'right',
};

export const vars = createGlobalTheme(':root', {
	display: {
		none: 'none',
		flex: 'flex',
		block: 'block',
		inline: 'inline',
	},
	space,
	colors,
	aspectRatio: {
		'1/1': '1 / 1',
		'3/4': '3 / 4',
		'4/3': '4 / 3',
		'16/9': '16 / 9',
	},
	borderRadius: {
		none: '0px',
		4: '4px',
		8: '8px',
		12: '12px',
		16: '16px',
		24: '24px',
		32: '32px',
		36: '36px',
	},
	fontFamily: {},
	fontSize,
	lineHeight,
	textAlign,
});
