import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Script from "next/script";

import { theme } from '../theme';
import { Layout } from '@/components/layouts/Layout';
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Script src="https://sa.devobserver.com/latest.js"  />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://sa.devobserver.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
		</ThemeProvider>
	);
}

export default MyApp;
