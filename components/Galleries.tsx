import { Carousel } from './Carousel';
import Image from 'next/image';

export const Galleries = () => {
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
			<Carousel />
		</>
	);
};
