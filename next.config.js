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
			'kalebeditions.s3.us-east-2.amazonaws.com',
			'metadata.nanopass.io',
			'api.benznft.xyz',
			'gateway.pinatas.cloud',
			'storage.googleapis.com',
			'api.9021.io',
			'nextui.org'
		],
	},
};
