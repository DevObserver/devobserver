interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_API_URL: string;
	readonly VITE_PUBLIC_API_URL: string;
	readonly VITE_ASSETS_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.svg' {
	import * as React from 'react';

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

	const src: string;
	export default src;
}
