import Image from 'next/image';

type Props = {
	image: string;
	title: string;
	link: string;
};

export const FooterCard: React.FC<Props> = ({ image, title, link }) => {
	return (
		<div className="max-w-sm backdrop-blur-sm bg-white/10 rounded-md">
			<a href={link} target="_blank" rel="noreferrer">
				<Image
					className="rounded-t-lg"
					src={image}
					alt="banner"
					width={500}
					height={300}
				/>
				<div className="p-5">
					<h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</div>
			</a>
		</div>
	);
};
