import crypto from 'crypto';
import path from 'path';
import sharp from 'sharp';

import { image2local } from './save-image-locally';
import { image2s3 } from './save-image-to-s3';

export const saveImage = async (feed: any, image: any) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const hashName = crypto.createHash('md5', 'feed-title');

	const date = new Date();
	const imageName = `${hashName.update(feed.title).digest('hex')}.jpg`;
	const pathBase = `images/feeds/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
	const imagePath = `${pathBase}/${imageName}`;
	const imageUrl = `/${pathBase}/${imageName}`;
	const outputDir = path.resolve(__dirname, '..', '..', '..', '..', '..', 'public', pathBase);
	const outputImage = path.resolve(__dirname, '..', '..', '..', '..', '..', 'public', imagePath);

	const resizedImage = await sharp(image).jpeg({ quality: 75 }).resize(640, 380).toBuffer();

	if (process.env.NODE_ENV === 'production') {
		await image2s3(imagePath, resizedImage);
	} else {
		await image2local(outputDir, resizedImage, outputImage);
	}

	return imageUrl;
};
