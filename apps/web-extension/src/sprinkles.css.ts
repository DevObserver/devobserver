import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { alignItems, colors, fontSize, lineHeight, space, vars } from './theme.css';

export const mediaQueries = {
	mobile: {},
	mobileMedium: { '@media': 'screen and (min-width: 480px)' },
	mobileLarge: { '@media': 'screen and (min-width: 640px)' },
	tablet: { '@media': 'screen and (min-width: 768px)' },
	tabletLarge: { '@media': 'screen and (min-width: 1024px)' },
	desktop: { '@media': 'screen and (min-width: 1280px)' },
	desktopLarge: { '@media': 'screen and (min-width: 1920px)' },
};

const opacity = defineProperties({
	properties: {
		opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
	},
});

const responsiveProperties = defineProperties({
	conditions: {
		...mediaQueries,
	},
	defaultCondition: 'mobile',
	properties: {
		alignItems: alignItems,
		display: vars.display,
		flexDirection: ['row', 'column'],
		flexGrow: [0, 1],
		fontSize: fontSize,
		gap: space,
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
		lineHeight: lineHeight,
		margin: space,
		marginBottom: space,
		marginLeft: space,
		marginRight: space,
		marginTop: space,
		padding: space,
		paddingTop: space,
		paddingBottom: space,
		paddingLeft: space,
		paddingRight: space,
	},
	shorthands: {
		mt: ['marginTop'],
		mr: ['marginRight'],
		mb: ['marginBottom'],
		ml: ['marginLeft'],
		pt: ['paddingTop'],
		pr: ['paddingRight'],
		pb: ['paddingBottom'],
		pl: ['paddingLeft'],
	},
});

const colorModeProperties = defineProperties({
	conditions: {
		lightMode: {},
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
	},
	defaultCondition: 'lightMode',
	properties: {
		color: colors,
		background: colors,
	},
});

export const sprinkles = createSprinkles(responsiveProperties, colorModeProperties, opacity);
