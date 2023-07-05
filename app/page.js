'use client';

import { useRouter } from 'next/navigation';
import QuoteBox from './components/QuoteBox';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function Home() {
	const router = useRouter();
	const baseDomain = router.basePath || '';
	const API_URL = baseDomain + '/api/quotes';

	const quotes = useRef([]);
	const [randomQuote, setRandomQuote] = useState({});

	useEffect(() => {
		fetchQuotes();
	}, []);

	const fetchQuotes = useCallback(async () => {
		try {
			const res = await fetch(API_URL);

			if (!res.ok) {
				throw new Error(
					"Failed to fetch data! ( This happened because you don't know how to code )",
				);
			}
			const data = await res.json();
			quotes.current = data;

			generateRandomQuote();
		} catch (error) {
			console.error(error);
		} finally {
		}
	}, []);

	const generateRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.current.length);
		const selectedQuote = quotes.current[randomIndex];
		setRandomQuote(selectedQuote);
	};

	return (
		<main className='container 2xl:px-20 mx-auto'>
			<QuoteBox
				randomQuote={randomQuote}
				generateRandomQuote={generateRandomQuote}
			/>
		</main>
	);
}
