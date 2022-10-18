import { x } from '@xstyled/emotion';
import Head from 'next/head';

import { Footer } from '@/components/Layouts/Footer';
import { Header } from '@/components/Layouts/Header';
import { Children } from '@/types/children';

export const Layout = ({ children }: Children) => {
	return (
		<>
			<Head>
				<title>DevObserver - App For Each Developer</title>
				<meta property="og:title" content="DevObserver" key="title" />

				<meta
					name="description"
					content="Stay tuned with the latest developer news, articles, tutorials, releases, fun and much more."
				/>
				<meta
					name="Keywords"
					content="news, news for developers, articles for developers, curated news, code news, development news,
					latest news for code lovers, development, frontend, backend, mobile, development, programming"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://devobserver.com/" />
				<meta property="og:title" content="DevObserver" />
				<meta
					property="og:description"
					content="Stay tuned with the latest developer news, articles, tutorials, releases, fun and much more."
				/>
				<meta property="og:image" content="https://devobserver.com/images/app.jpeg?width=960" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://devobserver.com" />
				<meta property="twitter:title" content="DevObserver" />
				<meta
					property="twitter:description"
					content="Stay tuned with the latest developer news, articles, tutorials, releases, fun and much more."
				/>
				<meta property="twitter:image" content="https://devobserver.com/images/app.jpeg?width=960" />
				<meta name="theme-color" content="#fff" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
			</Head>

			<Header />
			<x.main>{children}</x.main>
			<Footer />
		</>
	);
};
