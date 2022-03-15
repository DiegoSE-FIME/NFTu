/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'clonex-assets.rtfkt.com',
			'ipfs.io',
			'via.placeholder.com',
		],
	},
};
