import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFetchNFT } from '../hooks';
import { DataResponse, OwnedNft } from '../interfaces';
import { images, topArtistsImages } from '../utils';
import { Card, Loader, PageLayout, CardImages } from '../components';

const Marketplace: NextPage = (): JSX.Element => {
	const ownerAddr: string = '0x9523183432407aD8cC75F5B30a2BE3Ab035511B2';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { ownedNfts: [] };
	console.log(data);

	return !data ? (
		<>
			<div className="flex justify-center mb-5 xl:inline-flex">
				<div className="flex justify-center h-8 w-40 bg-gray-500 animate-pulse xl:m-11 mt-11"></div>
			</div>
			<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
				{[1, 2, 3, 4].map((num) => (
					<Loader key={num} />
				))}
			</div>
		</>
	) : (
		<PageLayout title="NFTu - Marketplace">
			<section className="trending">
				<h1 className="text-bold text-3xl xl:m-14 xl:text-left text-center mt-11">
					Trending.
				</h1>
				<div className="xl:flex xl:m-14 justify-center m-5">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 md:grid-cols-4 grid grid-cols-2 gap-x-2">
						{ownedNfts.slice(10, 14).map((nft: OwnedNft) => (
							<div key={nft.id.tokenId}>
								<div>
									<Card
										image={nft.media[0].gateway}
										title={nft.title}
										name="NFTu"
										address={nft.contract.address}
										link="https://opensea.io/"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className="for_you">
				<h1 className="text-bold text-3xl xl:m-14 xl:text-left text-center mt-11">
					For you.
				</h1>
				<div className="xl:flex xl:m-14 justify-center m-5">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 md:grid-cols-4 grid grid-cols-2 gap-x-2">
						{images.map((image, index) => (
							<motion.div key={index}>
								<CardImages
									image={image}
									title="NFTu"
									link="https://opensea.io/"
									name="NFTu"
									address="0xed5af388653567af2f388e6224dc7c4b3241c544"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div className="top_artists">
				<h1 className="text-bold text-3xl xl:m-14 xl:text-left text-center mt-11">
					Top Artists.
				</h1>
				<div className="xl:flex xl:m-14 justify-center m-5">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 md:grid-cols-4 grid grid-cols-2 gap-x-2">
						{topArtistsImages.map((image, index) => (
							<CardImages
								key={index}
								image={image}
								title="NFTu"
								link="https://opensea.io/"
								name="NFTu"
								address="0xed5af388653567af2f388e6224dc7c4b3241c544"
							/>
						))}
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Marketplace;
