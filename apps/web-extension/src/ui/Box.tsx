import React from 'react';

import { sprinkles } from '../styles/sprinkles.css';
import { vars } from '../styles/theme.css';
import { ElementCommonProps, ElementSpaceProps, ResponsiveDisplay } from '../types/ElementBase';

interface BoxProps extends ElementCommonProps, ElementSpaceProps {
	as?: 'div' | 'section' | 'header' | 'main' | 'aside' | 'span' | 'nav';
	display?: ResponsiveDisplay | keyof typeof vars.display;
}

export const Box: React.FC<BoxProps> = ({
	children,
	className,
	as = 'div',
	display,
	opacity,
	margin,
	mt,
	mr,
	mb,
	ml,
	mx,
	my,
	padding,
	pt,
	pr,
	pb,
	pl,
	px,
	py,
}) => {
	const Component = as;

	const spacingStyle = sprinkles({
		display,
		opacity,
		margin,
		mt,
		mr,
		mb,
		ml,
		mx,
		my,
		padding,
		pt,
		pr,
		pb,
		pl,
		px,
		py,
	});

	return <Component className={`${className ? className : ''} ${spacingStyle}`}>{children}</Component>;
};
