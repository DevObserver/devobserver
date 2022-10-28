import { prisma } from '@devobserver/prisma';
import { Prisma } from '@prisma/client';

import { queues } from '../../queues';
import { NOTIFICATION_TYPE } from '../../queues/notification';
import { Profile } from '../../types/Profile';
import { getUserEmail } from './get-user-email';

export const createNewUser = async (profile: Profile) => {
	const getName = (): string => {
		if (profile.displayName) {
			return profile.displayName;
		}

		if (profile.username) {
			return profile.username;
		}

		return '';
	};

	const email = getUserEmail(profile);

	const userData: Prisma.UserCreateInput = {
		name: getName(),
		email,
		image: profile.photos ? profile.photos[0].value : null,
		accounts: {
			create: {
				provider: profile.provider,
				providerAccountId: profile.id,
				profile: profile as Prisma.InputJsonValue,
				authScheme: '',
				displayName: profile.displayName ? profile.displayName : '',
				userName: profile.username ? profile.username : '',
			},
		},
	};

	if (profile.emails && profile.emails.length) {
		await queues.notification.add(NOTIFICATION_TYPE.WELCOME, { email });
	}

	return prisma.user.create({ data: userData });
};
