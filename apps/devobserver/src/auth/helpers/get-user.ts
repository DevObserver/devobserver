import { prisma } from '@devobserver/prisma';

import { Profile } from '../../types/Profile';
import { createNewUser } from './create-new-user';
import { getUserEmail } from './get-user-email';

export const getUser = async (profile: Profile) => {
	const user = await prisma.user.findUnique({
		where: {
			email: getUserEmail(profile),
		},
		include: {
			accounts: true,
		},
	});

	if (!user) {
		return createNewUser(profile);
	}

	return user;
};
