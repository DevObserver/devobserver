import { x } from '@xstyled/emotion';

export const Container = (props: any) => (
	<x.div
		container={{ '3xl': true }}
		mx="auto"
		{...props}
		px={{
			_: 12,
			lg: 24,
		}}
	/>
);
