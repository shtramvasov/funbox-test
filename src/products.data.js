import cat from '@assets/images/cat.png'

export const products = [
	{
		id: 1,
		title: 'Нямушка',
		description: 'Сказочное заморское яство',
		filling: 'с фуа-гра',
		portions: '10',
		isCustomeHappy: false,
		weight: '0,5',
		mices: '1',
		img: cat,
		heading: 'Печень утки разварная с артишоками.',
	},
	{
		id: 2,
		title: 'Нямушка',
		description: 'Сказочное заморское яство',
		filling: 'с рыбой',
		portions: '40',
		isCustomeHappy: false,
		weight: '2',
		mices: '2',
		img: cat,
		heading: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
	},
	{
		id: 3,
		title: 'Нямушка',
		description: 'Сказочное заморское яство',
		filling: 'с курой',
		portions: '100',
		isCustomeHappy: true,
		weight: '5',
		mices: '5',
		img: cat,
		heading: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: true
	},
]
