import Image from 'next/image';
import { motion } from 'framer-motion';
import { DataResponse, OwnedNft } from '../interfaces';
import styles from './Carousel.module.css';

interface CarouselProps {
	data?: DataResponse | undefined;
	from?: number;
	to?: number;
	nfts: OwnedNft[];
	images?: string[];
}

export const Carousel = ({ data, from, to, nfts }: CarouselProps) => {
	return !data ? (
		<div className="flex justify-center">
			<h2>Loading...</h2>
		</div>
	) : (
		<motion.div className="carousel container cursor-grab overflow-hidden">
			<motion.div
				drag="x"
				dragConstraints={{
					right: 0,
					left: -nfts?.slice(from, to).length * 100,
				}}
				className="inner-carousel flex">
				{nfts?.slice(from, to).map((nft, index) => {
					return (
						<motion.div
							key={index}
							className="xl:p-5 xl:min-w-fit min-w-full item">
							<Image
								src={nft.media[0].gateway}
								alt="carousel"
								width={320}
								height={350}
								className={styles.image}
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};
