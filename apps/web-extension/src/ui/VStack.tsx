import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const vStack = cva(['flex flex-col'], {
	variants: {
		alignItems: {
			center: 'items-center',
			flexStart: 'items-start',
			flexEnd: 'items-end',
			stretch: 'items-stretch',
			baseline: 'items-baseline',
		},
		justifyContent: {
			center: 'justify-center',
			flexStart: 'justify-start',
			flexEnd: 'justify-end',
			spaceBetween: 'justify-between',
			spaceAround: 'justify-around',
			spaceEvenly: 'justify-evenly',
		},
	},
});

export interface VStackProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof vStack> {
	as?: 'div' | 'section' | 'header' | 'main' | 'aside' | 'span' | 'nav' | 'ul' | 'ol' | 'li' | 'a';
	href?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
}

export const VStack: FC<VStackProps> = ({
	as = 'div',
	alignItems,
	justifyContent,
	className,
	children,
	...props
}) => {
	const Component = as;

	return (
		<Component
			className={`${vStack({ alignItems, justifyContent })} ${className ? className : ''}`}
			{...props}>
			{children}
		</Component>
	);
};
