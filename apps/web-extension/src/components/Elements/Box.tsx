import React from 'react';

import { sprinkles } from '../../sprinkles.css';
import { vars } from '../../theme.css';
import { ElementCommonProps, ElementSpaceProps, ResponsiveDisplay } from '../../types/ElementBase';

interface BoxProps extends ElementCommonProps, ElementSpaceProps {
	as?: 'div' | 'section' | 'main' | 'aside' | 'span' | 'nav';
	display?: ResponsiveDisplay | keyof typeof vars.display;
}

export const Box: React.FC<BoxProps> = ({
	children,
	className,
	as = 'div',
	display,
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

	const spacingStyle = sprinkles({
		display,
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

	return <Component className={`${className} ${spacingStyle}`}>{children}</Component>;
};
