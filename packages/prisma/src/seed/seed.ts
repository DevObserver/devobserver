import { prisma } from './lib/prisma';
import { createAwards } from './factories/award';
import { createCategories } from './factories/category';
import { createTypes } from './factories/type';
import { createChannels } from './factories/channel';

async function main() {
	const awards = await createAwards();
	const categories = await createCategories();
	const types = await createTypes();
	const channels = await createChannels(categories, types);

	console.log('Awards created', awards.length);
	console.log('Categories created', categories.length);
	console.log('Types created', types.length);
	console.log('Channels created', channels.length);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
