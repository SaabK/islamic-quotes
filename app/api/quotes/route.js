import { NextResponse } from 'next/server';

const quotes = [
	{
		quote: 'Ignorance is the root and stem of all evil.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'Happiness is attained by overcoming the flaws of the soul.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'The perfect happiness of the individual is the same as the perfect happiness of the state.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'A ruler who lacks wisdom is no ruler at all.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'The pursuit of knowledge is the highest form of worship.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'Reason is the light that illuminates the path to truth.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'Justice is the foundation upon which a virtuous society is built.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'The true leader is one who leads by example.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'The ultimate goal of human existence is the attainment of true happiness.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'The wise seek knowledge, while the ignorant remain in darkness.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'The best way to lead is through moral guidance and virtuous actions.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'Wisdom is the compass that guides the soul towards enlightenment.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'The harmony of the soul is the key to inner peace.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'Knowledge is a treasure that can never be taken away.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'True education is not just the accumulation of facts, but the development of character.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote: 'The pursuit of virtue leads to a flourishing society.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'True happiness is found in the harmony of the body, mind, and soul.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'A just society is one where each individual fulfills their role with excellence.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'The path to enlightenment requires self-discipline and self-reflection.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'The intellect is the guide that leads us to truth and understanding.',
		author: 'Al-Farabi',
		category: '',
	},

	{
		quote:
			'Do not seek to follow in the footsteps of the wise. Seek what they sought.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'Love is the remedy, for love is the divine medicine.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The one who truly knows themselves knows their Lord.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote:
			'The heart that is alive is constantly in a state of spiritual ascension.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'In every breath, take a step closer to your true essence.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The world is a book, and those who do not travel read only a page.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote:
			'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The greatest journey is the one within yourself.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The more you know yourself, the closer you are to God.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote:
			'Be like a tree, giving shade to others while remaining rooted in your own being.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The secret of love is seeking to understand, not to be understood.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The light of God is within you, waiting to be unveiled.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote:
			'The essence of all religions is one – the pursuit of truth and unity.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'Your true nature is the divine spark within you.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'Seek knowledge from the cradle to the grave.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The Sufi is a mirror that reflects the divine attributes.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'The path to God is through love and surrender.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote:
			'Silence is the language of God; everything else is a poor translation.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'Be in this world as if you were a stranger or a traveler.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'In every moment, God is unveiling Himself to you.',
		author: 'Ibn Arabi',
		category: '',
	},

	{
		quote: 'Ignorance leads to fear, knowledge to courage.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: 'The aim of philosophy is to attain truth and knowledge.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: 'Doubt is the beginning of wisdom.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: "The more you know, the more you realize how much you don't know.",
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: 'Reason is the guide that leads us to truth and understanding.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: 'The pursuit of knowledge is the path to enlightenment.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote:
			'There is no contradiction between faith and reason; they are two paths that lead to the same truth.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote:
			'True understanding comes from critical thinking and rational inquiry.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: 'Education is the key to progress and the liberation of the mind.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote: 'The intellect is the noblest faculty of the human mind.',
		author: 'Ibn Rushd',
		category: '',
	},

	{
		quote:
			'The world is divided into men who have wit and no religion, and men who have religion and no wit.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote:
			'Knowledge which is acquired under compulsion obtains no hold on the mind.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote:
			'The world is a prison for the believer and a paradise for the unbeliever.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote:
			'The first step in the acquisition of wisdom is silence, the second listening, the third memory, the fourth practice, the fifth teaching others.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote:
			'Knowledge of the soul would unfailingly make us melancholy if the pleasures of expression did not keep us alert and of a lively intelligence.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote: 'An ignorant doctor is the aide-de-camp of death.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote:
			'He who is ignorant of the nature of things has no knowledge at all.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote: 'Medicine is a science of uncertainty and an art of probability.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote: 'The science of governing is indispensable for all well-being.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote:
			'Truth does not become more true by virtue of the fact that the entire world agrees with it, nor less so even if the whole world disagrees with it.',
		author: 'Ibn Sina',
		category: '',
	},

	{
		quote: 'Seek knowledge even if it is in China.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'The more knowledge one acquires, the more humble one becomes.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'The intellect is the noblest faculty of the human mind.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'Patience is the key to unlocking the doors of success.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote:
			'It is better to have a thousand enemies outside the tent than one inside.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote:
			'The beauty of the heart is more valuable than the beauty of the face.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'Doubt is the beginning of wisdom.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'True knowledge is knowing oneself.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'The most powerful weapon is patience.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote: 'Education is the key to enlightenment.',
		author: 'Al-Kindi',
		category: '',
	},

	{
		quote:
			'The duty of the man who investigates the writings of scientists, if learning the truth is his goal, is to make himself an enemy of all that he reads.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: 'The road to knowledge begins with the turn of the page.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote:
			'The true scientist is not the one who can provide answers, but the one who knows how to ask the right questions.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: 'Knowledge is the key that unlocks the doors of understanding.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: 'The pursuit of truth requires courage, patience, and an open mind.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: 'Curiosity is the fuel that drives the engine of discovery.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: 'Every failure is a stepping stone towards success.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote:
			'Do not be afraid to challenge the established norms; that is where progress lies.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote:
			'True knowledge is not the memorization of facts, but the understanding of principles.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote:
			'Question everything, for it is through questioning that we uncover the truth.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: 'Wisdom is the fruit of experience and reflection.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote:
			'In the pursuit of knowledge, there is no destination; it is a lifelong journey.',
		author: 'Al-Hasan Ibn al-Haytham',
		category: '',
	},

	{
		quote: "The beginning of guidance is the recognition of one's own faults.",
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'Knowledge that is not acted upon is useless.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The heart is the sanctuary where God is found.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'Patience is the key to unlocking the doors of success.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The greatest victory is the victory over oneself.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote:
			'True knowledge is not the accumulation of information, but the transformation of character.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The purpose of knowledge is to illuminate the path to God.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'Seek knowledge with an open mind and a humble heart.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The key to success is to purify the heart from impurities.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The true measure of wealth is contentment of the heart.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote:
			'True wealth lies not in material possessions, but in the richness of the soul.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The greatest act of worship is to serve others.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'Happiness is found in the remembrance of God.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The journey of a thousand miles begins with a single step.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote: 'The only lasting beauty is the beauty of the heart.',
		author: 'Al-Ghazali',
		category: '',
	},

	{
		quote:
			'The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.',
		author: 'Muhammad (ﷺ)',
		category: '',
	},

	{
		quote: 'The worldly life is a prison for the believer.',
		author: 'Muhammad (ﷺ)',
		category: '',
	},

	{
		quote: 'Kindness is a mark of faith, and whoever is not kind has no faith.',
		author: 'Muhammad (ﷺ)',
		category: '',
	},
];

export async function GET() {
	return NextResponse.json(quotes);
}
