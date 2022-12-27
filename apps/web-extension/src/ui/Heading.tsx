import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const heading = cva(['font-800'], {
	variants: {
		variant: {
			h1: ['leading-1', 'text-28', 'md:text-32', 'lg:text-72', 'xl:text-120', '3xl:text-120'],
			h2: [
				'text-24',
				'leading-32',
				'md:text-28',
				'md:leading-36',
				'lg:text-32',
				'lg:leading-40',
				'xl:text-40',
				'xl:leading-48',
				'3xl:text-48',
				'3xl:leading-56',
			],
			h3: [
				'text-20',
				'leading-28',
				'md:text-24',
				'md:leading-32',
				'lg:text-24',
				'lg:leading-32',
				'xl:text-32',
				'xl:leading-40',
				'3xl:text-40',
				'3xl:leading-48',
			],
			h4: [
				'text-18',
				'leading-24',
				'md:text-20',
				'md:leading-28',
				'lg:text-20',
				'lg:leading-28',
				'xl:text-24',
				'xl:leading-32',
				'3xl:text-32',
				'3xl:leading-40',
			],
			h5: [
				'text-16',
				'leading-24',
				'md:text-18',
				'md:leading-24',
				'lg:text-18',
				'lg:leading-24',
				'xl:text-20',
				'xl:leading-28',
				'3xl:text-24',
				'3xl:leading-32',
			],
			h6: [
				'text-14',
				'leading-20',
				'md:text-16',
				'md:leading-24',
				'lg:text-16',
				'lg:leading-24',
				'xl:text-16',
				'xl:leading-24',
				'3xl:text-20',
				'3xl:leading-28',
			],
		},
		align: {
			left: ['text-left'],
			center: ['text-center'],
			right: ['text-right'],
		},
	},
});

export interface HeadingProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof heading> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
	children,
	className,
	as = 'h1',
	variant = 'h1',
	align = 'left',
}) => {
	const Component = as;

	return (
		<Component className={` ${heading({ variant: variant, align: align })} ${className ? className : ''}`}>
			{children}
		</Component>
	);
};
