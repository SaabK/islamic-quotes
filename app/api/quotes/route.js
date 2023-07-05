import { NextResponse } from 'next/server';

const quotes = [
	{
		author: 'Ali Bin Naseer',
		quote: 'You win by not quitting. You loose by not quitting',
		category: 'motivation',
	},
	{
		author: 'Sultan Mehmet II',
		quote: "Even their dreams don't reach the places, where my power reaches",
		category: 'power',
	},
	{
		author: 'Al-Farabi',
		quote: 'Knowledge is the conformity of the object and the intellect.',
		category: 'Philosophy',
	},
	{
		author: 'Ibn Sina',
		quote: 'The true object of human knowledge is the universals.',
		category: 'Philosophy',
	},
	{
		author: 'Ibn Rushd',
		quote:
			'Ignorance leads to fear, fear leads to hatred, and hatred leads to violence. This is the equation.',
		category: 'Wisdom',
	},
	{
		author: 'Al-Ghazali',
		quote: 'The heart is the seat of intelligence, not the brain.',
		category: 'Philosophy',
	},
	{
		author: 'Ibn Arabi',
		quote:
			'Do not attach yourself to any particular creed exclusively, so that you may disbelieve all the rest; otherwise you will lose much good, nay, you will fail to recognize the real truth of the matter.',
		category: 'Wisdom',
	},
	{
		author: 'Ibn Khaldun',
		quote:
			'In the beginning of the dynasty, great things are created. In the end, when the dynasty declines, small things are created.',
		category: 'Wisdom',
	},
	{
		author: 'Al-Kindi',
		quote:
			'No disease that can be treated by diet should be treated with any other means.',
		category: 'Medicine',
	},
	{
		author: 'Ibn Taymiyyah',
		quote:
			'Verily, I constantly renew my Islam until this very day, as up to now, I do not consider myself to have ever been a good Muslim.',
		category: 'Self-Improvement',
	},
	{
		author: 'Rumi',
		quote:
			'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
		category: 'Self-Improvement',
	},
	{
		author: 'Ibn al-Qayyim',
		quote:
			'If you want to know the true nature of anything, you must first understand its properties and its position in the order of things.',
		category: 'Philosophy',
	},
	{
		author: 'Al-Farabi',
		quote:
			'The best and most noble way to acquire knowledge is to seek it for the sake of knowledge itself.',
		category: 'Motivation',
	},

	{
		author: 'Ibn Sina',
		quote:
			'The world is divided into men who have wit and no religion, and men who have religion and no wit.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Rushd',
		quote: 'Ignorance is the cause of all misunderstandings.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Ghazali',
		quote: 'The more knowledge you have, the greater humility you will have.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Arabi',
		quote: 'To know yourself is to know your Lord.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Khaldun',
		quote:
			'Civilization begins with order, grows with liberty, and dies with chaos.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Taymiyyah',
		quote:
			'The tongue is like a lion. If you let it loose, it will wound someone.',
		category: 'Self-Improvement',
	},

	{
		author: 'Rumi',
		quote: 'The wound is the place where the Light enters you.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Kindi',
		quote:
			'True happiness is not found in the material possessions of this world, but in the contentment of the heart.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Qayyim al-Jawziyya',
		quote: 'Patience is bitter, but its fruit is sweet.',
		category: 'Motivation',
	},

	{
		author: 'Ibn Hazm',
		quote:
			'Do not judge someone based on their appearance; judge them based on their character and actions.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn al-Jawzi',
		quote: 'The best form of worship is to serve others selflessly.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Farabi',
		quote: 'True happiness lies in virtue and the pursuit of knowledge.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Sina',
		quote: 'The first step to wisdom is silence, the second is listening.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Rushd',
		quote:
			'The ignorant person is the one who is not aware of his own ignorance.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Ghazali',
		quote: 'The heart is a divine instrument; purify it from all impurities.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Arabi',
		quote: 'In the realm of love, silence is the most eloquent language.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Khaldun',
		quote:
			'People are united by their common humanity, not divided by their differences.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Taymiyyah',
		quote:
			'Do not belittle any act of kindness, for even a small gesture can have a profound impact.',
		category: 'Self-Improvement',
	},
	{
		author: 'Al-Farabi',
		quote:
			'The true ruler is not the one who conquers nations, but the one who conquers himself.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Sina ',
		quote: 'The greatest happiness is to know the source of unhappiness.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Rushd',
		quote: 'The purpose of knowledge is to illuminate the path of truth.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Ghazali',
		quote:
			'True knowledge is not merely memorizing facts, but understanding their meanings.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Arabi',
		quote:
			'The universe is a book, and those who do not travel read only one page.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Khaldun',
		quote: 'True wealth lies not in possessions, but in knowledge and wisdom.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Taymiyyah',
		quote:
			'The heart becomes restless until it finds its peace in the remembrance of God.',
		category: 'Wisdom',
	},

	{
		author: 'Rumi',
		quote:
			'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Hazm',
		quote:
			'The best way to find yourself is to lose yourself in the service of others.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn al-Jawzi',
		quote:
			'The strongest person is not the one who can overpower others, but the one who can control their own anger.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Farabi',
		quote:
			'The most beautiful music is the one that echoes the melodies of the soul.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Sina',
		quote: 'He who knows himself is truly wise.',
		category: 'Self-Improvement',
	},

	{
		author: 'Ibn Rushd',
		quote: 'The noblest pleasure is the joy of understanding.',
		category: 'Wisdom',
	},

	{
		author: 'Al-Ghazali',
		quote:
			'Do not grieve over the past, for it is gone. Do not worry about the future, for it is yet to come. Live in the present moment and make it beautiful.',
		category: 'Wisdom',
	},

	{
		author: 'Ibn Arabi',
		quote:
			'The path to enlightenment is not a journey of miles; it is a journey of the heart.',
		category: 'Motivation',
	},

	{
		author: 'Ibn Khaldun',
		quote:
			'The most successful people are not the ones who never fail, but the ones who learn and grow from their failures.',
		category: 'Motivation',
	},

	{
		author: 'Ibn Taymiyyah',
		quote: 'The true value of wealth is in how it is used to benefit others.',
		category: 'Wisdom',
	},

	{
		author: 'Rumi',
		quote: 'You were born with wings, why prefer to crawl through life?',
		category: 'Motivation',
	},
];

export async function GET() {
	return NextResponse.json(quotes);
}
