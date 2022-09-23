const MONTH_NAMES = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function getFormattedDate(date: any, prefomattedDate: any = false, hideYear = false) {
	const day = date.getDate();
	const month = MONTH_NAMES[date.getMonth()];
	const year = date.getFullYear();
	let minutes = date.getMinutes();

	if (minutes < 10) {
		// Adding leading zero to minutes
		minutes = `0${minutes}`;
	}

	if (prefomattedDate) {
		// FeedsForYou at 10:20
		// Yesterday at 10:20
		return `${prefomattedDate}`;
	}

	if (hideYear) {
		// 10. January at 10:20
		return `${month} ${day}`;
	}

	// 10. January 2017. at 10:20
	return `${day} ${month} ${year}`;
}

// --- Main function
export const timeAgo = (dateParam: any) => {
	if (!dateParam) {
		return null;
	}

	const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
	const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
	const today: any = new Date();
	const yesterday = new Date(today - DAY_IN_MS);
	const seconds = Math.round((today - date) / 1000);
	const minutes = Math.round(seconds / 60);
	const isToday = today.toDateString() === date.toDateString();
	const isYesterday = yesterday.toDateString() === date.toDateString();
	const isThisYear = today.getFullYear() === date.getFullYear();

	if (seconds < 5) {
		return 'now';
	} else if (minutes < 60) {
		return `${minutes}m ago`;
	} else if (isToday) {
		return getFormattedDate(date, 'Today'); // FeedsForYou at 10:20
	} else if (isYesterday) {
		return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
	} else if (isThisYear) {
		return getFormattedDate(date, false, true); // 10. January at 10:20
	}

	return getFormattedDate(date); // 10. January 2017. at 10:20
};
