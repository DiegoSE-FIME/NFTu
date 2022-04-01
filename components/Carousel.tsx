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
		<motion.div className="xl:carousel xl:container xl:cursor-grab xl:overflow-hidden ml-5 grid grid-cols-2">
			<motion.div
				drag="x"
				dragConstraints={{
					right: 0,
					left: -300,
				}}
				whileDrag={{ skewX: -5 }}
				className="inner-carousel flex">
				{nfts?.slice(from, to).map((nft, index) => {
					return (
						<motion.div
							key={index}
							className="xl:min-w-max min-w-full item px-4 xl:ml-0 -ml-5">
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
