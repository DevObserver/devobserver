import { prisma } from '@devobserver/prisma';

import { getUserEmail } from './get-user-email';

export const createNewUser = async (profile: any) => {
	const getName = (): string => {
		if (profile.displayName) {
			return profile.displayName;
		}

		if (profile.username) {
			return profile.username;
		}

		return '';
	};

	const userData = {
		name: getName(),
		email: getUserEmail(profile),
		image: profile.photos ? profile.photos[0].value : null,
		accounts: {
			create: {
				provider: profile.provider,
				providerAccountId: profile.id,
				profile: profile,
				authScheme: '',
				displayName: profile.displayName ? profile.displayName : '',
				userName: profile.username ? profile.username : '',
			},
		},
	};

	return prisma.user.create({ data: userData });
};
