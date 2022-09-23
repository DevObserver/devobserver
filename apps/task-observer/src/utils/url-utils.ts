import url from 'url';

export const makeUrlAbsolute = (base: any, relative: any) => {
	const relativeParsed = url.parse(relative);

	if (!relativeParsed.host) {
		return url.resolve(base, relative);
	}

	return relative;
};
