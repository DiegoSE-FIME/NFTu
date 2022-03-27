import Image from 'next/image';

type CardProps = {
	image: string | undefined;
	description: string | undefined;
};

export const CardModal = ({ image, description }: CardProps) => {
	return (
		<div className="max-w-sm bg-gray-800">
			<Image src={image as string} alt="Card" width={500} height={400} />
			<div className="flex flex-col justify-between p-4 leading-normal">
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
			</div>
		</div>
	);
};
