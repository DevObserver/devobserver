import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const text = cva([], {
	variants: {
		size: {
			xLarge: ['text-18', 'leading-18'],
			large: ['text-16', 'leading-20'],
			medium: ['text-14', 'leading-20'],
			small: ['text-12', 'leading-16'],
		},
		align: {
			left: ['text-left'],
			center: ['text-center'],
			right: ['text-right'],
		},
	},
});

export interface TextProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof text> {}

export const Text: React.FC<TextProps> = ({ children, className, size = 'medium', align }) => {
	return <p className={`${text({ size, align })} ${className ? className : ''}`}>{children} </p>;
};
