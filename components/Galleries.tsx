import { Carousel } from './Carousel';
import Image from 'next/image';

export const Galleries = () => {
	return (
		<>
			<div className="flex xl:ml-24 m-5 justify-between">
				<h2 className="text-3xl">
					<span className="text-indigo-500">Top </span>Galleries.
				</h2>
				<div className="w-40">
					<span className="mr-4">swipe left</span>
					<Image src="/arrow-right.png" width={24} height={24} alt="arrow" />
				</div>
			</div>
			<Carousel />
		</>
	);
};
