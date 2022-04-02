/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'arweave.net',
			'ipfs.io',
			'd1iw5n6erb90fa.cloudfront.net',
			'metadata.nanopass.io',
		],
	},
};
