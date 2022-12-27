import { cva } from 'class-variance-authority';
import { FC } from 'react';

import { VStack } from './VStack';

interface ImageProps {
	src: string;
	alt: string;
	href?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
}

const image = cva(['overflow-hidden'], {
	variants: {
		variant: {
			small: ['aspect-[9/5]'],
			medium: ['aspect-[9/6]'],
			large: ['aspect-[9/6]'],
		},
	},
});

export const Image: FC<ImageProps> = ({ src, alt, href, target }) => {
	const element = href ? 'a' : 'div';

	return (
		<VStack as={element} className={image({ variant: 'small' })} href={href} target={target}>
			<img className="object-cover opacity-90 h-full w-full transition-all" src={src} alt={alt} />
		</VStack>
	);
};
