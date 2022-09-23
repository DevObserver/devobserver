import clc from 'cli-color';
import debug from 'debug';

const errorColor = clc.red.bold;
const warnColor = clc.yellow;
const infoColor = clc.blue;
const successColor = clc.green;

export const log = {
	info: (nameSpace: string, message: string) => {
		const info = debug(`DevObserver:info:${nameSpace}`);
		info.log = console.log.bind(console);
		return info(infoColor(message));
	},
	error: (nameSpace: string, message: string) => {
		const error = debug(`DevObserver:error:${nameSpace}`);
		return error(errorColor(message));
	},
	warning: (nameSpace: string, message: string) => {
		const info = debug(`DevObserver:info:${nameSpace}`);
		info.log = console.log.bind(console);
		return info(warnColor(message));
	},
	success: (nameSpace: string, message: string) => {
		const info = debug(`DevObserver:info:${nameSpace}`);
		info.log = console.log.bind(console);
		return info(successColor(message));
	},
};
