import Image from 'next/image';
import { motion } from 'framer-motion';
import { CarouselProps } from '../interfaces';
import styles from './Carousel.module.css';

export const Carousel: React.FC<CarouselProps> = ({ data, from, to, nfts }) => {
	return !data ? (
		<div className="flex justify-center">
			<h2>Loading...</h2>
		</div>
	) : (
		<motion.div className="carousel container cursor-grab overflow-hidden ml-5">
			<motion.div
				drag="x"
				dragConstraints={{
					right: 0,
					left: -nfts?.slice(from, to).length * 100,
				}}
				whileDrag={{ skewX: -5 }}
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
