import { Galleries } from './Galleries';
import Image from 'next/image';
import { theme } from './tailwindClasses';

export const Body = () => {
	return (
		<>
			<div className={theme.bodyDiv}>
				<div className="hidden xl:block xl:px-20 xl:py-11">
					<Image src="/Card.png" alt="Card" width={350} height={400} />
					<button className={theme.placeABidButton}>
						<span>Place a bid</span>
					</button>
				</div>

				<div>
					<div className={theme.bodyTitle}>
						<h2>Build on ETH.</h2>
						<h2>
							Owned by <span className="text-teal-400">you</span>.
						</h2>
					</div>
					<div className="xl:mt-5 xl:w-[500px] w-96 px-5 xl:px-0">
						<p className={theme.headerDescription}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur cum ullam obcaecati non possimus! Nihil inventore
							aspernatur corporis quia architecto et voluptate molestias
							officia, illo doloribus. Nemo ex quaerat nihil.
						</p>
					</div>
				</div>
			</div>
			<Galleries />
		</>
	);
};
