import Card from '@components/Card/Card'
import Layout from '@components/Layout/Layout'
import { products } from './products.data'

function App() {
	return (
		<Layout>
			<h2 className='white--text'>Ты сегодня покормил кота?</h2>
			<section className='flex flex-wrap justify-center gap-4'>
				{products.map(product => (
					<Card
            {...product}
						key={product.id}
					/>
				))}
			</section>
		</Layout>
	)
}

export default App
