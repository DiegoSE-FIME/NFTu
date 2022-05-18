import React from 'react';
import { CarouselItem } from './Carousel-item';
import { Carousel } from './Carousel';
import { Review } from './Reviews';

export const Slider: React.FC = () => {
	return (
		<Carousel className="bg-gray-900 font-semibold py-10 lg:py-20">
			<CarouselItem index={0}>
				<Review
					desc="NFTu is a great platform for learning about crypto. It is a great place to learn about the latest technologies and trends in the industry."
					by="Diego"
				/>
			</CarouselItem>
			<CarouselItem index={1}>
				<Review
					desc="I am a crypto enthusiast and I am very happy to be able to use NFTu as a platform to learn about crypto. It is a great place to learn about web3." 
					by="Midudev (Software Engineer GitHub Star)"
				/>
			</CarouselItem>

			<CarouselItem index={2}>
				<Review
					desc="If you are looking for a platform to learn about crypto, NFTu is the place for you. It is a great place to learn about NFTs and decentralised web."
					by="gndx (Foundation Layer at Platzi)"
				/>
			</CarouselItem>
			<CarouselItem index={3}>
				<Review
					desc="Thanks to NFTu, I found my unique NFT and I am very happy to be able to use it."
					by="Roland (Web3 enthusiast)"
				/>
			</CarouselItem>
			<CarouselItem index={4}>
				<Review
					desc="As a creator of NFTs is so easy and fast sell and buy them."
					by="Okay Bears (NFT collectibles)"
				/>
			</CarouselItem>
		</Carousel>
	);
};
