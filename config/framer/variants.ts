export const item = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
	},
};
