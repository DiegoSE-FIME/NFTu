import React from 'react';
import { CarouselItem } from './Carousel-item';
import { Carousel } from './Carousel';
import { Review } from './Reviews';

export const Slider: React.FC = () => {
	return (
		<Carousel className="bg-gray-900 font-semibold py-10 lg:py-20">
			<CarouselItem index={0}>
				<Review
					desc="Upload your work (image, video, audio, or 3D art), add a title and
					description, and customize your NFTs with properties, stats, and
					unlockable content"
					by="Diego"
				/>
			</CarouselItem>
			<CarouselItem index={1}>
				<Review
					desc="Upload your work (image, video, audio, or 3D art), add a title and
					description, and customize your NFTs with properties, stats, and
					unlockable content"
					by="Diego"
				/>
			</CarouselItem>

			<CarouselItem index={2}>
				<Review
					desc="Upload your work (image, video, audio, or 3D art), add a title and
					description, and customize your NFTs with properties, stats, and
					unlockable content"
					by="Diego"
				/>
			</CarouselItem>
			<CarouselItem index={3}>
				<Review
					desc="Upload your work (image, video, audio, or 3D art), add a title and
					description, and customize your NFTs with properties, stats, and
					unlockable content"
					by="Diego"
				/>
			</CarouselItem>
			<CarouselItem index={4}>
				<Review
					desc="Upload your work (image, video, audio, or 3D art), add a title and
					description, and customize your NFTs with properties, stats, and
					unlockable content"
					by="Diego"
				/>
			</CarouselItem>
		</Carousel>
	);
};
