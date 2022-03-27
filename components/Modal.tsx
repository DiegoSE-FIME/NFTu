import { motion } from 'framer-motion';

export const Modal: React.FC<{
	isOpen: boolean;
	onClose: () => void;
}> = ({ isOpen, onClose, children }) => {
	return (
		<motion.div
			initial={false}
			animate={{ opacity: isOpen ? 1 : 0 }}
			transition={{ duration: 10 }}
			onClick={onClose}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1000,
			}}>
			<motion.div
				style={{
					padding: '1rem',
					borderRadius: '0.5rem',
					width: '20rem',
					maxHeight: '80vh',
					overflow: 'none',
				}}>
				{children}
			</motion.div>
		</motion.div>
	);
};
