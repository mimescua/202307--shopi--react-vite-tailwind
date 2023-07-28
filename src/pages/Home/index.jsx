import React from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';
import { isEmptyArray } from '.././../utils'

function Home() {
	const { searchByTitle, setSearchByTitle, productsBySearch } = React.useContext(ShoppingCartContext);

	return (
		<Layout>
			<div className='flex justify-center items-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>Exclusive products</h1>
			</div>
			<input
				type='text'
				placeholder='Sarch for a product'
				className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
				onChange={(event) => setSearchByTitle(event.target.value)}
			/>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{
					!isEmptyArray(productsBySearch)? productsBySearch?.map((product) => (
						<Card key={product.id} {...product} />
					)) : <div>No results for {searchByTitle}</div>
				}
			</div>
			<ProductDetail />
		</Layout>
	);
}

export default Home;
