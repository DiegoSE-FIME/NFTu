import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Carousel.module.css';

type CarouselImages = {
	images: string[];
};

export const CarouselImages: React.FC<CarouselImages> = ({ images }) => {
	return (
		<>
			<motion.div className="carousel container cursor-grab overflow-hidden xl:-ml-[50px]">
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
								className="xl:p-5 xl:min-w-fit min-w-full item xl:ml-0 ml-5">
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
