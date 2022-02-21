import { NextPage } from 'next';
import Link from 'next/link';

const walletError: NextPage = () => {
	return (
		<>
			<h1 className="text-center mt-4">Whoops</h1>
			<p className="text-center mt-4">
				There was an error with your wallet. Please make sure you have installed
				MetaMask extension and try again.
				<br />
				<Link href="/">
					<a className="underline decoration-solid text-teal-500">Go back</a>
				</Link>
				.
			</p>
		</>
	);
};

export default walletError;
