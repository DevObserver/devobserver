import { FC } from 'react';

interface AvatarProps {
	src: string;
	alt: string;
}

export const Avatar: FC<AvatarProps> = ({ src, alt }) => {
	return (
		<div className="flex h-20 w-20 overflow-hidden rounded-full">
			<img className="object-cover h-full w-full" src={src} alt={alt} />
		</div>
	);
};
