import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { getLibrary } from '../config/web3';
import { Web3ReactProvider } from '@web3-react/core';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/LoginContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<AuthContext>
				<Navbar />
				<Component {...pageProps} />
			</AuthContext>
		</Web3ReactProvider>
	);
}

export default MyApp;
