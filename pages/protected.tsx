import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';

export default function Protected({ user }: { user: User }) {
	return (
		<>
			<h1>Hello, {user.user_metadata.full_name}!</h1>
			<p> Your email : {user.email}</p>
			<Image
				src={user.user_metadata.avatar_url}
				width="200"
				height="200"
				alt="profile"
			/>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	console.log(user);
	if (!user) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return { props: { user } };
};
