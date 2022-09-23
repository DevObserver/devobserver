import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
	// @ts-ignore
	plugins: [react(), svgr(), vanillaExtractPlugin()],
});
