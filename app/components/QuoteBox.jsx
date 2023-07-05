'use client';

import Image from 'next/image';
import { PrimaryButton } from './Buttons';
import copyIcon from '../../public/copy.svg';
import twitterIcon from '../../public/twitter.svg';
import Quote from './Quote';
import leftQuote from '../../public/quotes-left.svg';

function QuoteBox({ randomQuote, generateRandomQuote }) {
	return (
		<div className='bg-[#141c48] px-8 py-10 pt-16 rounded-lg flex flex-col justify-between gap-5 w-[500px] break-words relative'>
			<div>
				<Quote quote={randomQuote} className='' />
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex'>
					<PrimaryButton
						text='Next Quote'
						classes='block w-fit'
						onClick={generateRandomQuote}
					/>
					{/* //TODO: make a copy to clipboard button */}
					<button>
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
