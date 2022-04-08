import { Carousel } from './Carousel';
import Image from 'next/image';
import { useFetchNFT } from '../hooks';
import { DataResponse } from '../interfaces';
import { CarouselImages } from './CarouselImages';

export const Galleries = () => {
	const ownerAddr = '0xbf9bca75b5a8c458dd73285b04b894e93efdf432';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { OwnedNft: [] };
	const images: string[] = [
		'/assetCarousel.svg',
		'/assetCarousel2.svg',
		'/assetCarousel3.svg',
		'/assetCarousel4.svg',
		'/assetCarousel5.svg',
	];

	return (
		<>
			<div className="xl:flex xl:ml-24 m-5 xl:justify-between mt-24 justify-start md:flex md:ml-24 md:justify-between">
				<h2 className="text-3xl">Top Galleries.</h2>
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
