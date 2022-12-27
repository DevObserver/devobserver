import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const hStack = cva(['flex flex-row'], {
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

export interface HStackProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof hStack> {
	as?: 'div' | 'section' | 'header' | 'main' | 'aside' | 'span' | 'nav' | 'ul' | 'ol' | 'li';
}

export const HStack: FC<HStackProps> = ({
	as = 'div',
	className,
	alignItems,
	justifyContent,
	children,
	...props
}) => {
	const Component = as;

	return (
		<Component className={`${hStack({ alignItems, justifyContent })} ${className || ''}`} {...props}>
			{children}
		</Component>
	);
};
