import { NextPage } from 'next';

const login: NextPage = () => {
	return (
		<>
			<div className="flex justify-center">
				<button className="inline-flex outline outline-1 outline-teal-400 items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 focus:shadow-outline hover:bg-teal-400 hover:text-black rounded">
					Sign in with Google
				</button>
			</div>
			<div className="flex justify-center">
				<button className="inline-flex outline outline-1 outline-teal-400 items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 focus:shadow-outline hover:bg-teal-400 hover:text-black rounded">
					Sign in with Google
				</button>
			</div>
			<div className="flex justify-center">
				<button className="inline-flex outline outline-1 outline-teal-400 items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 focus:shadow-outline hover:bg-teal-400 hover:text-black rounded">
					Sign in with Google
				</button>
			</div>
		</>
	);
};

export default login;
