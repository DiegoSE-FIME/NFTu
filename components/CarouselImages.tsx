import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Carousel.module.css';

type CarouselImages = {
	images: string[];
};

export const CarouselImages: React.FC<CarouselImages> = ({ images }) => {
	return (
		<>
			<motion.div className="xl:carousel xl:container xl:cursor-grab xl:overflow-hidden xl:ml-5 ml-0 grid grid-cols-2">
				<motion.div
					drag="x"
					dragConstraints={{
						right: 0,
						left: -images?.length * 100 || 0,
					}}
					whileDrag={{ skewX: -5 }}
					dragPropagation
					className="inner-carousel flex">
					{images.map((image, index) => {
						return (
							<motion.div
								key={index}
								className="xl:min-w-max min-w-full item px-4 ml-0 py-4">
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
