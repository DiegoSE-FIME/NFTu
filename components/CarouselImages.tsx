import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Carousel.module.css';

type CarouselImages = {
	images: string[];
};

export const CarouselImages: React.FC<CarouselImages> = ({ images }) => {
	return (
		<>
			<motion.div className="xl:carousel xl:container  xl:overflow-hidden xl:ml-5 ml-0 grid grid-cols-2 xl:p-6 md:carousel md:container  md:overflow-hidden">
				<motion.div
					drag="x"
					dragConstraints={{
						right: 0,
						left: -images?.length * 100 || 0,
					}}
					dragElastic={0.7}
					dragPropagation
					className="inner-carousel flex md:px-11 xl:px-0 xl:cursor-grab md:cursor-grab">
					{images.map((image, index) => {
						return (
							<motion.div
								key={index}
								className="xl:min-w-max min-w-full item px-4 ml-0 py-4 md:min-w-max md:py-4">
								<Image
									src={image}
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
		</>
	);
};
