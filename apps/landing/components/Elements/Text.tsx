import { x } from '@xstyled/emotion';
import React from 'react';

import { ElementBaseProps } from '@/types/ElementBaseProps';
import { ElementSizeProps } from '@/types/ElementSizeProps';
import { ElementSpaceProps } from '@/types/ElementSpaceProps';
import { mediaQueryNames } from '@/types/MediaQueries';

import { theme } from '../../theme';

type TextResponsiveProps = {
	[key in mediaQueryNames]?: keyof typeof theme.texts;
};

interface TextProps extends ElementBaseProps, ElementSpaceProps, ElementSizeProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	fontWeight?: keyof typeof theme.fontWeight;
	textAlign?: 'left' | 'center' | 'right';
	text?: TextResponsiveProps | keyof typeof theme.texts;
}

export const Text: React.FC<TextProps> = (props) => {
	return <x.p {...props} />;
};
