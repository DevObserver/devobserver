// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { log } from '@devobserver/log';
import crypto from 'crypto';
import FeedParser from 'feedparser';
import request from 'request';

const logNameSpace = 'RssObserver:RssParser';

export const rssParser = (channel: any, award: any) => {
	return new Promise((resolve) => {
		const feedparser = new FeedParser();
		let rawFeeds = [];
		let hash;

		request(
			{
				method: 'GET',
				url: channel.rss,
				timeout: 10000,
				headers: {
					'user-agent':
						'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36',
				},
			},
			(e, res, body) => {
				if (e) {
					log.error(logNameSpace, `${channel.name} ${e}`);
					resolve();
				}

				if (!e && res.statusCode != 200) {
					log.error(logNameSpace, `${channel.name} bad status code (status: ${res.statusCode}`);
					resolve();
				}

				if (body) {
					feedparser.end(body);
				} else {
					resolve();
				}
			}
		);

		feedparser
			.on('error', (e) => {
				log.error(logNameSpace, `${channel.name} ${e}`);
			})
			.on('readable', () => {
				let item;

				while ((item = feedparser.read())) {
					rawFeeds.push(item);
				}
			})
			.on('end', () => {
				const linkList = rawFeeds.map((feed) => feed.link);

				if (linkList && linkList.length > 0) {
					hash = crypto.createHash('sha256').update(linkList.join()).digest('hex');
				}

				const newHash = hash;
				const data = {
					rssHash: undefined,
					feeds: [],
				};

				if (channel.rssHash !== newHash) {
					const startDay = new Date(new Date() - 30 * 24 * 60 * 60 * 1000);
					const currentDate = new Date();

					rawFeeds = rawFeeds.filter((feed) => {
						const itemDate = new Date(feed.date);
						const itemCreateDate = itemDate > currentDate ? currentDate : itemDate;
						return new Date(itemCreateDate) > startDay && feed.link;
					});

					data.rssHash = newHash;
					data.feeds = rawFeeds.map((feed) => {
						return {
							title: feed.title,
							url: encodeURI(feed.link),
							awardId: award.id,
							channelId: channel.id,
							categoryId: channel.categoryId,
							published: true,
							typeId: channel.typeId,
							image: channel.feedImage,
							views: 0,
							likes: 0,
						};
					});
				}

				resolve(data);
			});
	});
};
