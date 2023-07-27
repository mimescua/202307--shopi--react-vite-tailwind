import React from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';

function Home() {
	const { products, searchByTitle, setSearchByTitle, filteredProducts } = React.useContext(ShoppingCartContext);

	const renderView = () => {
		if (searchByTitle?.length > 0) {
			if (filteredProducts?.length > 0) {
				return filteredProducts?.map((product) => (
					<Card key={product.id} {...product} />
				));
			} else {
				return (<div>No results for {searchByTitle}</div>)
			}
		} else
			return (products?.map((product) => <Card key={product.id} {...product} />));
	};

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
				{ renderView() }
			</div>
			<ProductDetail />
		</Layout>
	);
}

export default Home;
