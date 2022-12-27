import { type VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

export const button = cva(
	['appearance-none', 'flex', 'cursor-pointer', 'items-center', 'gap-12', 'transition-all'],
	{
		variants: {
			intent: {
				primary: [
					'bg-gray-1000',
					'dark:bg-gray-50',
					'hover:bg-gray-800',
					'dark:hover:bg-gray-300',
					'text-gray-50',
					'dark:text-gray-1000',
					'rounded-8',
				],
				secondary: ['hover:bg-gray-200', 'dark:hover:bg-gray-900', 'rounded-8'],
				ghost: [''],
			},
			size: {
				none: ['text-14', 'p-0'],
				small: ['text-14', 'font-600', 'px-16', 'py-8'],
				medium: ['text-14', 'font-600', 'px-36', 'py-12'],
				large: '',
			},
			state: {
				default: ['opacity-60', 'hover:opacity-100'],
				active: ['opacity-100'],
			},
		},
	}
);

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ intent, size = 'medium', state = 'default', ...props }) => {
	return <button className={button({ intent, size, state })} {...props} />;
};
