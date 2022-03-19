import { motion } from 'framer-motion';
import Image from 'next/image';
import { useFetchNFT } from '../hooks';
import { DataResponse } from '../interfaces';

export const Carousel = () => {
	const ownerAddr = '0xbf9bca75b5a8c458dd73285b04b894e93efdf432';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { OwnedNft: [] };

	return !data ? (
		<div className="flex justify-center">
			<h2>Loading...</h2>
		</div>
	) : (
		<motion.div className="carousel container cursor-grab overflow-hidden">
			<motion.div
				drag="x"
				dragConstraints={{ right: 0, left: -(6 - 1) * 100 }}
				className="inner-carousel flex">
				{ownedNfts.slice(8, 13).map((nft, index) => {
					return (
						<motion.div key={index} className="p-5 min-w-fit">
							<Image
								src={nft.media[0].gateway}
								alt="carousel"
								width={320}
								height={350}
								className="rounded carousel-image"
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};
