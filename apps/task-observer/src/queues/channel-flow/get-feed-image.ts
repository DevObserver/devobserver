import got from 'got';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { log } from '@devobserver/log';

import { makeUrlAbsolute } from '../../utils/url-utils';

const logNameSpace = 'RssObserver';

const htmlMetaTags = [
	'meta[property="og:image"]',
	'meta[name="og:image"]',
	'meta[property="og:image:url"]',
	'meta[name="og:image:url"]',
	'meta[property="og:image:secure_url"]',
	'meta[name="twitter:image"]',
	'meta[property="twitter:image"]',
	'meta[name="twitter:image"]',
	'meta[name="thumbnail"]',
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

export const getFeedImage = async (feed: any) => {
	try {
		const response = await got(feed.url);

		const dom = await new JSDOM(response.body.replace(/<style(\s|>).*?<\/style>/gi, ''), {
			pretendToBeVisual: true,
		});

		const imageUrl = getImageUrlFromHtmlMeta(dom);
		let imageBuffer;

		if (imageUrl) {
			const url = makeUrlAbsolute(feed.url, imageUrl);
			imageBuffer = await got(url).buffer();
		}

		return imageBuffer;
	} catch (e) {
		log.error(logNameSpace, `Failed to get feed image ${feed.channelId} / ${feed.title}`);
		return undefined;
	}
};
