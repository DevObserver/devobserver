import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles.css';

export const heading = recipe({
	variants: {
		variant: {
			h1: sprinkles({
				fontSize: {
					mobile: 28,
					tablet: 32,
					tabletLarge: 40,
					desktop: 48,
					desktopLarge: 56,
				},
				lineHeight: {
					mobile: 36,
					tablet: 40,
					tabletLarge: 48,
					desktop: 56,
					desktopLarge: 64,
				},
			}),
			h2: sprinkles({
				fontSize: {
					mobile: 24,
					tablet: 28,
					tabletLarge: 32,
					desktop: 40,
					desktopLarge: 48,
				},
				lineHeight: {
					mobile: 32,
					tablet: 36,
					tabletLarge: 40,
					desktop: 48,
					desktopLarge: 56,
				},
			}),
			h3: sprinkles({
				fontSize: {
					mobile: 20,
					tablet: 24,
					tabletLarge: 24,
					desktop: 32,
					desktopLarge: 40,
				},
				lineHeight: {
					mobile: 28,
					tablet: 32,
					tabletLarge: 32,
					desktop: 40,
					desktopLarge: 48,
				},
			}),
			h4: sprinkles({
				fontSize: {
					mobile: 18,
					tablet: 20,
					tabletLarge: 20,
					desktop: 24,
					desktopLarge: 32,
				},
				lineHeight: {
					mobile: 24,
					tablet: 28,
					tabletLarge: 28,
					desktop: 32,
					desktopLarge: 40,
				},
			}),
			h5: sprinkles({
				fontSize: {
					mobile: 16,
					tablet: 18,
					tabletLarge: 18,
					desktop: 20,
					desktopLarge: 24,
				},
				lineHeight: {
					mobile: 24,
					tablet: 24,
					tabletLarge: 24,
					desktop: 28,
					desktopLarge: 32,
				},
			}),
			h6: sprinkles({
				fontSize: {
					mobile: 14,
					tablet: 16,
					tabletLarge: 16,
					desktop: 16,
					desktopLarge: 20,
				},
				lineHeight: {
					mobile: 20,
					tablet: 24,
					tabletLarge: 24,
					desktop: 24,
					desktopLarge: 28,
				},
			}),
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
