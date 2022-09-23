import { keyframes, style } from '@vanilla-extract/css';

export const fadeInKeyframes = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

export const animatedText = style({
	animation: `${fadeInKeyframes} .1s forwards`,
	fontFamily: 'monospace',
	opacity: 0,
});
