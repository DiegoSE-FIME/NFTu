import React from 'react';
import { Card, Grid } from '@nextui-org/react';

export const Blog = ({
	category,
	image,
	description,
}: {
	category: string;
	image: string;
	description: string;
}) => {
	return (
		<main className="container flex flex-col justify-center text-white px-4">
			<div className="p-5 flex justify-center">
				<Grid xs={12} sm={4}>
					<Card cover>
						<Card.Image src={image} height={340} width="100%" alt={category} />
					</Card>
				</Grid>
			</div>
			<article className="max-w-prose mx-auto py-8">
				<h1 className="text-2xl font-bold">{category.toUpperCase()}</h1>
				<h2 className="mt-2 text-sm text-gray-500">Admin, 28 November 2021</h2>

				<p className="mt-6">{description}</p>
			</article>
		</main>
	);
};
