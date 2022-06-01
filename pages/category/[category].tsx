import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Blog } from '../../components/';
import { cards } from '../../utils';

const Details: NextPage = () => {
	const router = useRouter();
	const { category } = router.query;

	return category ? (
		<>
			{cards.map(({ title, image, description }) => {
				if (title.toLowerCase() === category) {
					return (
						<Blog image={image} category={title} description={description} />
					);
				}
			})}
		</>
	) : (
		<>
			<h1>404</h1>
			<p>Page not found</p>
		</>
	);
};

export default Details;
