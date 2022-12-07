const Papa = require('papaparse');
const fs = require('fs');
const { prisma } = require('./dist/index');

(async () => {
	const csvString = fs.readFileSync('./channels.csv', { encoding: 'utf8' });
	const parsedData = await Papa.parse(csvString, {
		header: true,
		skipEmptyLines: true,
	});

	const dataToInsert = parsedData.data.map((channel) => {
		return {
			name: channel.name,
			url: channel.url,
			rss: channel.rss,
			image: channel.image,
			description: channel.description,
			feedImage: channel.feedImage,
			categoryId: channel.categoryId,
			typeId: channel.typeId,
			enabled: true,
		};
	});

	const result = await prisma.channel.createMany({ data: dataToInsert, skipDuplicates: true });

	console.log('parsedData', result);
})();
