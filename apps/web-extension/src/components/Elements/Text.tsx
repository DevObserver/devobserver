import React from 'react';

import { sprinkles } from '../../sprinkles.css';
import { vars } from '../../theme.css';
import { ElementCommonProps, ElementSpaceProps } from '../../types/ElementBase';
import { text } from './Text.css';

interface TextProps extends ElementCommonProps, ElementSpaceProps {
	align?: keyof typeof vars.textAlign;
	size?: 'base' | 'large' | 'small';
}

export const Text: React.FC<TextProps> = ({
	children,
	className,
	align = 'left',
	size = 'base',
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

	return <p className={`${className} ${text({ align: align, size: size })} ${spacingStyle}`}>{children}</p>;
};
