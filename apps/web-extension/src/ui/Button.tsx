import { button } from './Button.css';

export const Button = ({ children, variant, onClick }: any) => {
	return (
		<button className={button({ variant: variant, radius: 'large' })} onClick={onClick}>
			{children}
		</button>
	);
};
