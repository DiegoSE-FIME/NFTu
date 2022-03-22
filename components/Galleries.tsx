import { Carousel } from './Carousel';
import Image from 'next/image';
import { useFetchNFT } from '../hooks';
import { DataResponse, OwnedNft } from '../interfaces';
import { CarouselImages } from './CarouselImages';

export const Galleries = () => {
	const ownerAddr = '0xbf9bca75b5a8c458dd73285b04b894e93efdf432';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { OwnedNft: [] };
	const images: string[] = [
		'/secondCarousel.png',
		'/sixthCarousel.png',
		'/third.gif',
		'/fourthCarousel.png',
		'/fifthCarousel.png',
		'/firstCarousel.png',
	];

	return (
		<>
			<div className="xl:flex xl:ml-24 m-5 xl:justify-between mt-11 justify-start">
				<h2 className="text-3xl">
					<span className="text-indigo-500">Top </span>Galleries.
				</h2>
				<div className="inline-flex xl:items-center xl:px-14 xl:py-2 xl:mt-0 mt-5">
					<span className="xl:mr-0 mr-5 xl:ml-0 ml-1">swipe left</span>
					<Image src="/arrow-right.png" width={24} height={24} alt="arrow" />
				</div>
			</div>
			<Carousel from={8} to={13} nfts={ownedNfts} data={data} />
			<CarouselImages images={images} />
		</>
	);
};
