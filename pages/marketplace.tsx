import { NextPage } from 'next';
import { Card, Loader, PageLayout, CardImages } from '../components';
import { DataResponse, OwnedNft } from '../interfaces';
import { motion } from 'framer-motion';
import { useFetchNFT } from '../hooks';
import { images, topArtistsImages } from '../utils';
import Link from 'next/link';

const Marketplace: NextPage = (): JSX.Element => {
	const ownerAddr: string = '0x9523183432407aD8cC75F5B30a2BE3Ab035511B2';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { ownedNfts: [] };
	console.log(ownedNfts);
	return !data ? (
		<>
			<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{[1, 2, 3, 4].map((i) => (
						<Loader key={i} />
					))}
				</div>
			</div>
		</>
	) : (
		<PageLayout title="NFTu - Marketplace">
			<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="flex justify-between">
					<h3 className="font-semibold text-3xl lg:text-4xl">Trending</h3>
					<span className="text-teal-300 text-xl lg:text-2xl">
						<Link href="/marketplace/trending">see more.</Link>
					</span>
				</div>
				<div className="grid grid-cols-2 gap-y-10 gap-x-6 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{ownedNfts.slice(14, 18).map((nft: OwnedNft, index) => (
						<Card
							key={index}
							title={nft.title}
							image={nft.media[0].gateway}
							link="https://opensea.io"
						/>
					))}
				</div>
			</div>
		</PageLayout>
	);
};

export default Marketplace;
