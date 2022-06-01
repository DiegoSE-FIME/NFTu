import { NextPage } from 'next';
import React, { ReactNode } from 'react';
import { AddFileSVG } from '../utils';

function Container({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className="flex flex-wrap sm:flex-nowrap px-10 py-8 gap-4 bg-clip-content">
			{children}
		</div>
	);
}

const Create: NextPage = (): JSX.Element => {
	return (
		<Container>
			<div className="flex flex-col">
				<h1 className="sm:text-4xl md:text-3xl font-bold">Create New Item</h1>
				<p className="text-gray-600 mt-5">
					Required fields{' '}
					<span className="text-red-500 after:content-['']">*</span>{' '}
				</p>
				<h2 className="text-xl font-bold mt-3">
					Image, Video, Audio, or 3D Model
					<span className="text-red-500 font-normal after:content-['']">
						*
					</span>{' '}
				</h2>
				<p className="text-gray-600 mt-2">
					File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
					GLB, GLTF. Max size: 100 MB
				</p>
				<div className="flex flex-col justify-center items-center w-80 h-80 border border-dashed rounded-lg">
					<form className="flex items-center space-x-6">
						<label className="block">
							<input
								type="file"
								className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
								file:bg-sky-500 file:text-white 
      hover:file:bg-sky-800
    "
							/>
						</label>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default Create;
