import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	sideVariants: {};
	itemVariants: {};
	links: Array<{
		name: string;
		to: string;
		id: number;
	}>;
	open: boolean;
	onLinkClicked: () => void;
}

export const Sidebar: React.FC<Props> = ({
	sideVariants,
	itemVariants,
	links,
	open,
	onLinkClicked,
}) => {
	return (
		<AnimatePresence>
			{open && (
				<motion.aside
					initial={{ width: 0 }}
					animate={{
						width: '100%',
						height: '60%',
						color: '#fff',
						background: '#000',
					}}
					exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
					aria-label="Sidebar"
					className="w-64 absolute top-0 left-0 z-40">
					<motion.div
						className="w-64 overflow-y-auto p-5 overflow-x-hidden"
						initial="closed"
						animate="open"
						exit="closed"
						variants={sideVariants}>
						{links.map(({ name, to, id }) => (
							<motion.div key={id} className="overflow-hidden w-64">
								<ul className="space-y-2">
									<motion.li>
										<Link href={to} passHref>
											<motion.a
												variants={itemVariants}
												whileTap={{ scale: 0.95 }}
												onClick={onLinkClicked}
												className="flex items-center p-2 text-base">
												{name}
											</motion.a>
										</Link>
									</motion.li>
								</ul>
							</motion.div>
						))}
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
};
