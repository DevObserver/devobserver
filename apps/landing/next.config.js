/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['assets.devobserver.com'],
	},
};

module.exports = nextConfig;
