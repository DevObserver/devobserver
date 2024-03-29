import got from 'got';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { log } from '@devobserver/log';

import { makeUrlAbsolute } from '../../utils/url-utils';

const logNameSpace = 'RssObserver';

const htmlMetaTags = [
	'[property="og:image"]',
	'[name="og:image"]',
	'[property="og:image:url"]',
	'[name="og:image:url"]',
	'[property="og:image:secure_url"]',
	'[name="twitter:image"]',
	'[property="twitter:image"]',
	'[name="twitter:image"]',
	'[name="thumbnail"]',
];

const getImageUrlFromHtmlMeta = (dom: any) => {
	for (let i = 0; i < htmlMetaTags.length; i++) {
		const element = dom.window.document.head.querySelector(htmlMetaTags[i]);

		if (element && element.getAttribute('content')) {
			return element.getAttribute('content');
		}
	}

	return undefined;
};

const httpHeaders = {
	'user-agent':
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
};

export const getFeedImage = async (feed: any) => {
	try {
		const response = await got(feed.url, {
			headers: httpHeaders,
		});

		const dom = await new JSDOM(response.body.replace(/<style(\s|>).*?<\/style>/gi, ''), {
			pretendToBeVisual: true,
		});

		const imageUrl = getImageUrlFromHtmlMeta(dom);
		let imageBuffer;

		if (imageUrl) {
			const url = makeUrlAbsolute(feed.url, imageUrl);
			imageBuffer = await got(url, {
				headers: httpHeaders,
			}).buffer();
		}

		return imageBuffer;
	} catch (error) {
		log.error(logNameSpace, `Failed to get feed image ${feed.channelId} / ${feed.title} ${error}`);
		return undefined;
	}
};
