import { prisma } from './lib/prisma';

async function main() {
	const ignoredTables = [
		'_prisma_migrations',
	];

	const tablenames = await prisma.$queryRaw<
		Array<{ tablename: string }>
	>`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

	for (const { tablename } of tablenames) {
		if (!ignoredTables.includes(tablename)) {
			try {
				await prisma.$executeRawUnsafe(`TRUNCATE TABLE "public"."${tablename}" RESTART IDENTITY CASCADE;`);
			} catch (error) {
				console.log({ error });
			}
		}
	}
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
