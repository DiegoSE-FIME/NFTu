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
		<motion.div className="carousel xl:container xl:cursor-grab xl:overflow-hidden ml-5 grid grid-cols-2 xl:p-6 md:container md:cursor-grab md:overflow-hidden md:p-6">
			<motion.div
				drag="x"
				dragConstraints={{
					right: 0,
					left: -550,
				}}
				dragElastic={0.7}
				className="inner-carousel flex">
				{nfts?.slice(from, to).map((nft, index) => {
					return (
						<motion.div
							key={index}
							className="xl:min-w-max min-w-full item px-4 xl:ml-0 -ml-5 md:min-w-max md:ml-0">
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
