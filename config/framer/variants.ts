export const item = {
	hidden: {
		opacity: 0,
		y: -180,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 1,
			delay: 0.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
	},
};

export const transitionValues = {
	duration: 1,
	repeat: Infinity,
	repeatType: 'reverse',
	ease: 'easeOut',
};
