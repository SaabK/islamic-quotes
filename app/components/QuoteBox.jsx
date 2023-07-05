'use client';

import Image from 'next/image';
import { PrimaryButton } from './Buttons';
import copyIcon from '../../public/copy.svg';
import twitterIcon from '../../public/twitter.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from 'react-toastify';

function QuoteBox({ randomQuote, generateRandomQuote }) {
	const { quote, author } = randomQuote;

	const handleCopy = () => {
		const textToCopy = `"${quote}" - ${author}`;
		navigator.clipboard.writeText(textToCopy);
		console.log(textToCopy);

		toast.success('Copied to Clipboard', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	return (
		<div className='bg-[#141c48] px-8 py-10  rounded-lg flex flex-col justify-between gap-5 w-[500px] break-words relative'>
			<div>
				<span>
					<span className='text-[#ebebeb] text-lg'>
						{quote || (
							<Skeleton
								count={2}
								baseColor='#00042e'
								highlightColor='#0d1242'
								height={27}
							/>
						)}
					</span>
				</span>
				<span className='block w-full text-right text-2xl font-bold mt-5 text-[#eeeeee]'>
					-{' '}
					{author || (
						<Skeleton
							baseColor='#00042e'
							highlightColor='#0d1242'
							width='45%'
							height={27}
						/>
					)}
				</span>
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex'>
					<PrimaryButton
						text='Next Quote'
						classes='block w-fit'
						onClick={generateRandomQuote}
					/>
					<button type='button' onClick={handleCopy}>
						<Image
							src={copyIcon}
							alt='Copy to clipboard'
							className='ml-4 cursor-pointer hover:w-6 transition-all'
							width={20}
						/>
					</button>
				</div>
				<a href='https://www.twitter.com/' target='_blank'>
					<Image
						src={twitterIcon}
						alt='post on your twitter'
						className='w-8 text-white hover:w-10 transition-all cursor-pointer'
					/>
				</a>
			</div>
		</div>
	);
}

export default QuoteBox;
