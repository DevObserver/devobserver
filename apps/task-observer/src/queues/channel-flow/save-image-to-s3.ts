import AWS from 'aws-sdk';

import {
	OBJECT_STORAGE_ACCESS_KEY_ID,
	OBJECT_STORAGE_BUCKET,
	OBJECT_STORAGE_ENDPOINT,
	OBJECT_STORAGE_SECRET_ACCESS_KEY,
} from '../../config';

const s3 = new AWS.S3({
	endpoint: OBJECT_STORAGE_ENDPOINT,
	accessKeyId: OBJECT_STORAGE_ACCESS_KEY_ID,
	secretAccessKey: OBJECT_STORAGE_SECRET_ACCESS_KEY,
});

export const image2s3 = (imagePath: any, image: any) => {
	return new Promise((resolve) => {
		const params = {
			Bucket: OBJECT_STORAGE_BUCKET,
			Key: imagePath,
			Body: image,
			ContentType: 'image/jpeg',
			ACL: 'public-read',
		};

		s3.upload(params, (error: any) => {
			if (error) {
				resolve(false);
			}
			resolve(true);
		});
	});
};
