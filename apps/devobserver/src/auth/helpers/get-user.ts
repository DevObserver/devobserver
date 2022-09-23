import { prisma } from '@devobserver/prisma';

import { createNewUser } from './create-new-user';
import { getUserEmail } from './get-user-email';

export const getUser = async (profile: any) => {
	const user = await prisma.user.findUnique({
		where: {
			email: getUserEmail(profile),
		},
		include: {
			accounts: true,
		},
	});

	if (!user) {
		return await createNewUser(profile);
	}

	return user;
};
