import { motion } from 'framer-motion';
import { containerStyle, circleStyle, spinTransition } from '../theme';

export const CircleLoader = () => {
	return (
		<div style={containerStyle}>
			<motion.span
				style={circleStyle}
				animate={{ rotate: 360 }}
				transition={spinTransition}
			/>
		</div>
	);
};
