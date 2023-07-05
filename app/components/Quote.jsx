'use client';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Quote({ quote }) {
	return (
		<>
			<span>
				<span className='text-[#ebebeb] text-lg'>
					{quote.quote || (
						<Skeleton
							count={2}
							baseColor='#00042e'
							highlightColor='#0d1242'
							height={27}
						/>
					)}
				</span>
			</span>
			<span className='block w-full text-right text-2xl font-bold mt-5'>
				{' '}
				-{' '}
				{quote.author || (
					<Skeleton baseColor='#00042e' highlightColor='#0d1242' />
				)}
			</span>
		</>
	);
}

export default Quote;
