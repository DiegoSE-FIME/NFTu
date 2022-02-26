import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { getLibrary } from '../config/web3';
import { Web3ReactProvider } from '@web3-react/core';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<Navbar />
			<Component {...pageProps} />
		</Web3ReactProvider>
	);
}

export default MyApp;
