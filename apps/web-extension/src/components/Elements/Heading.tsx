import React from 'react';

import { sprinkles } from '../../sprinkles.css';
import { vars } from '../../theme.css';
import { ElementCommonProps, ElementSpaceProps } from '../../types/ElementBase';
import { heading } from './Heading.css';

interface HeadingProps extends ElementCommonProps, ElementSpaceProps {
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	align?: keyof typeof vars.textAlign;
}

export const Heading: React.FC<HeadingProps> = ({
	children,
	className,
	as = 'h1',
	variant = 'h1',
	align = 'left',
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

	return (
		<Component className={`${className} ${heading({ variant: variant, align: align })} ${spacingStyle}`}>
			{children}
		</Component>
	);
};
