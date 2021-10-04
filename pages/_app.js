import 'tailwindcss/tailwind.css';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Header from '../components/header/Header';
import axios from 'axios';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
	const { user } = pageProps;
	const audience = process.env.AUTH0_AUDIENCE;

	return (
		<UserProvider user={user}>
			<Header />
			<div className=" max-w-7xl mx-auto px-4 sm:px-6">
				<SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
					<Component {...pageProps} />
				</SWRConfig>
			</div>
		</UserProvider>
	);
}

export default MyApp;
