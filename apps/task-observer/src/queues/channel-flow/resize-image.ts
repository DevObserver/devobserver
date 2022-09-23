import sharp from 'sharp';

export const resizeImage = (image: any) => {
	return new Promise((resolve) => {
		sharp(image)
			.jpeg({ quality: 75 })
			.resize(640)
			.toFormat('jpeg')
			.toBuffer()
			.then((data) => {});
	});
};

module.exports = { resizeImage };
