import { Options } from '../interfaces';
import useSWR, { Key, Fetcher, BareFetcher } from 'swr';
import axios, { AxiosResponse } from 'axios';
import { DataResponse } from '../interfaces';

export const useFetchNFT = (ownerAddr: string) => {
	const apiKey: Key = 'z6-SaAgm7QbsR3nNeob_oO6iIfHcLIV-';
	const baseURL: string = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs`;
	const options: Options = {
		method: 'GET',
		url: `${baseURL}?=owner=${ownerAddr}`,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const { url } = options;

	const fetcher: Fetcher = async (url: string) => {
		const response: AxiosResponse = await axios.get(url, options);
		return response.data;
	};

	const { data, error } = useSWR<DataResponse>(
		url,
		fetcher as BareFetcher<DataResponse>
	);

	if (error) {
		console.log(error);
	}

	return { data };
};
