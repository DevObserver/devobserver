import { type VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

export const button = cva(['appearance-none', 'flex', 'items-center', 'gap-12', 'transition-all'], {
	variants: {
		intent: {
			primary: '',
			secondary: ['bg-gray-950', 'hover:bg-gray-925', 'rounded-8', 'cursor-pointer'],
			ghost: ['bg-transparent', 'hover:bg-[#2a2a2a]', 'rounded-8'],
		},
		size: {
			small: ['text-14', 'font-700', 'px-16', 'py-8'],
			medium: ['text-14', 'font-700', 'px-36', 'py-12'],
			large: '',
		},
	},
});

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ intent, size = 'medium', ...props }) => {
	return <button className={button({ intent, size })} {...props} />;
};
