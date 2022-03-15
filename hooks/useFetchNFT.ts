import { useState } from 'react';
import useSWR from 'swr';
import { DataResponse, OwnedNft } from '../interfaces';
import { Fetcher } from 'swr';
import axios, { AxiosResponse } from 'axios';

export const useFetchNFT = (url: string) => {
	const fetcher: Fetcher = async (url: string) => {
		const response: AxiosResponse = await axios.get(url);
		return response.data;
	};

	const { data, error } = useSWR<DataResponse>(url, fetcher as any);

	if (error) {
		console.log(error);
	}

	return { data };
};
