export const getUserEmail = (profile: any) => {
	if (profile.emails && profile.emails.length) {
		return profile.emails[0].value;
	}

	return `${profile.username || profile.id}.${profile.provider}@devobserver.com`;
};
