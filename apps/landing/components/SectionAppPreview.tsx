import { x } from '@xstyled/emotion';
import Image from 'next/image';

const SectionAppPreview = () => {
	return (
		<x.div position="relative">
			<Image src="/images/hero.png" alt="" width="2400" height="1213" />
		</x.div>
	);
};

export default SectionAppPreview;
