import Image from 'next/image';

type Props = {
	icon: string;
	title: string;
	link: string;
};

export const FooterCard: React.FC<Props> = ({ icon, title, link }) => {
	return (
		<div className="max-w-sm backdrop-blur-lg bg-white/10 p-6 flex justify-center flex-wrap text-center">
			<Image src={icon} alt={title} width={200} height={100} />
			<a href={link} target="_blank" rel="noreferrer">
				<h5 className="py-3 mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
			</a>
		</div>
	);
};
