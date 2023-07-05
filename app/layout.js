import './globals.css';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Islamic Quotes',
	description: 'Find your favorite islamic quotes on here',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-[#00042e]`}>
				<div className=' text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					{children}
				</div>
				<ToastContainer />
			</body>
		</html>
	);
}
