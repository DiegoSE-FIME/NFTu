import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
	title: string | undefined;
	image: string;
	link: string;
	address: string | undefined;
	name: string | undefined;
};

export const Card = ({ title, image, link, address, name }: CardProps) => {
	return (
		<>
			<div className="max-w-xs border border-teal-700 shadow-md mb-5">
				<div className="p-5">
					{image ? (
						<Image
							src={image ? image : 'https://via.placeholder.com/300x200'}
							alt={title}
							width={400}
							height={350}
						/>
					) : (
						<div className="text-center">Loading...</div>
					)}
				</div>
				<div className="grid grid-cols-2">
					<div className="py-0 px-5 w-80">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
								{title}
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							By <span className="text-indigo-500">{name}</span>
						</p>

						<div className="break-words w-64">
							<Link href={link} passHref>
								<a target="_blank">
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Address{' '}
										<span className="mt-2 text-indigo-500 hover:underline hover:decoration-indigo-500">
											{address}
										</span>
									</p>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
