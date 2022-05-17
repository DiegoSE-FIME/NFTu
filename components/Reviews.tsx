import React from 'react';

interface Props {
	by: string;
	desc: string;
}

export const Review: React.FC<Props> = ({ desc, by }) => {
	return (
		<div className="flex flex-col jusitfy-center text-center px-5 md:px-10 lg:px-20">
			<div className="text-xl md:text-2xl leading-10 lg:leading-[3rem]">
				&quot;{desc}&quot;
			</div>
			<span>- {by}</span>
		</div>
	);
};
