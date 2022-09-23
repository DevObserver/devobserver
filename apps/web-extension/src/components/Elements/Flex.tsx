import React from 'react';

import { sprinkles } from '../../sprinkles.css';
import { alignItems, flexDirection, vars } from '../../theme.css';
import { ElementCommonProps, ElementSpaceProps, ResponsiveSpace } from '../../types/ElementBase';
import { AlignItems, FlexDirection, JustifyContent } from '../../types/ElementFlex';
import { flex } from './Flex.css';

interface FlexProps extends ElementCommonProps, ElementSpaceProps {
	as?: 'div' | 'section' | 'main' | 'aside' | 'span' | 'nav' | 'ul' | 'li';
	alignItems?: AlignItems | keyof typeof alignItems;
	flexDirection?: FlexDirection | keyof typeof flexDirection;
	flexGrow?: 0 | 1;
	gap?: ResponsiveSpace | keyof typeof vars.space;
	justifyContent?:
		| JustifyContent
		| 'stretch'
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-around'
		| 'space-between';
}

export const Flex: React.FC<FlexProps> = ({
	children,
	className,
	as = 'div',
	alignItems,
	flexDirection,
	flexGrow,
	justifyContent,
	gap,
	opacity,
	mt,
	mr,
	mb,
	ml,
	pt,
	pr,
	pb,
	pl,
}) => {
	const Component = as;

	const utilityClassNames = sprinkles({
		alignItems,
		flexDirection,
		flexGrow,
		justifyContent,
		gap,
		opacity,
		mt,
		mr,
		mb,
		ml,
		pt,
		pr,
		pb,
		pl,
	});

	return <Component className={`${className} ${flex} ${utilityClassNames}`}>{children}</Component>;
};
