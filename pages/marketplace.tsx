import { NextPage } from 'next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFetchNFT } from '../hooks';
import { DataResponse, OwnedNft } from '../interfaces';
import { descriptions, images, topArtistsImages } from '../utils';
import {
	Card,
	Loader,
	PageLayout,
	CardImages,
	Modal,
	CardModal,
} from '../components';

const Marketplace: NextPage = (): JSX.Element => {
	const [selectedId, setSelectedId] = useState(null as string | null);
	const ownerAddr: string = '0x7217bc604476859303a27f111b187526231a300c';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { ownedNfts: [] };
	const nums: number[] = [1, 2, 3, 4];

	return !data ? (
		<>
			<div className="flex justify-center mb-5 xl:inline-flex">
				<div className="flex justify-center h-8 w-40 bg-gray-500 animate-pulse xl:m-11 mt-11"></div>
			</div>
			<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
				{nums.map((num) => (
					<Loader key={num} />
				))}
			</div>
		</>
	) : (
		<PageLayout title="NFTu - Marketplace">
			<div className="trending">
				<h1 className="text-bold text-3xl xl:m-14 xl:text-left text-center mt-11">
					Trending.
				</h1>
				<div className="xl:flex xl:m-14 justify-center m-5">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
						{ownedNfts.slice(18, 22).map((nft: OwnedNft) => (
							<div key={nft.id.tokenId}>
								<motion.div
									layoutId={nft.id.tokenId}
									onClick={() => setSelectedId(nft.id.tokenId)}>
									<Card
										image={nft.media[0].gateway}
										title={nft.title}
										name="NFTu"
										address={nft.contract.address}
										link="https://opensea.io/"
									/>
								</motion.div>
							</div>
						))}

						<AnimatePresence>
							{selectedId && (
								<motion.div
									layoutId={selectedId}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}>
									<Modal
										isOpen={!!selectedId}
										onClose={() => setSelectedId(null)}>
										<CardModal
											image={
												ownedNfts.find((nft) => nft.id.tokenId === selectedId)
													?.media[0].gateway
											}
											description={descriptions.example}
										/>
									</Modal>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
			<div className="for_you">
				<h1 className="text-bold text-3xl xl:m-14 xl:text-left text-center mt-11">
					For you.
				</h1>
				<div className="xl:flex xl:m-14 justify-center m-5">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
						{images.map((image, index) => (
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
			<div className="top_artists">
				<h1 className="text-bold text-3xl xl:m-14 xl:text-left text-center mt-11">
					Top Artists.
				</h1>
				<div className="xl:flex xl:m-14 justify-center m-5">
					<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
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
