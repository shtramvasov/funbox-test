import { useState } from 'react'
import classnames from 'classnames'

function Card({
	title,
	description,
	filling,
	portions,
	mices = 1,
	isCustomeHappy = false,
	weight,
	img,
	heading,
	disabled = false,
}) {
	const [active, setActive] = useState(false)

	return (
		<div>
			<div
				onClick={() => setActive(!active)}
				className={classnames('card flex flex-col mb-1 transition', {
					'card--active': active,
					'card--disabled': disabled,
				})}
			>
				{active ? (
					<p className='pb-1 red--text'>Котэ не одобряет?</p>
				) : (
					<p className='pb-1 gray--text'>{description}</p>
				)}
				<h1>{title}</h1>
				<p className='subtitle pb-1'>{filling}</p>
				<div className='flex flex-col gray--text'>
					<p>
						<b>{portions}</b> порций
					</p>
					<p>{mices > 1 ? `${mices} мышей в подарок` : 'мышь в подарок'}</p>
					{isCustomeHappy ? <p>заказчик доволен</p> : null}
				</div>
				<div className='card__badge flex justify-center items-center round p-1 white--text'>
					<p className='title flex flex-col items-center'>
						{weight} <span>кг</span>
					</p>
				</div>
				<img className='card__image' src={img} alt={title} />
			</div>
			{disabled ? (
				<p className='flex justify-center font-small lemon--text '>
					Печалька, {filling} закончился.
				</p>
			) : active ? (
				<p className='flex white--text justify-center font-small'>{heading}</p>
			) : (
				<p className='card__link flex justify-center white--text font-small'>
					Чего сидишь? Порадуй котэ, <a onClick={() => setActive(!active)} href='#'>купи.</a>
				</p>
			)}
		</div>
	)
}

export default Card
