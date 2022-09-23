import fs from 'fs';
import sharp from 'sharp';

export const image2local = (outputDir: any, image: any, outputImage: any) => {
	return new Promise((resolve) => {
		fs.promises.mkdir(outputDir, { recursive: true }).then(() => {
			sharp(image)
				.toFile(outputImage)
				.then(() => {
					resolve(true);
				})
				.catch(() => {
					resolve(false);
				});
		});
	});
};
