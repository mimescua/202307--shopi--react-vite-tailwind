import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

function Home() {
	const [products, setProducts] = React.useState(null);

	React.useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	return (
		<Layout>
			Home
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{products?.map((product) => (
					<Card key={product.id} {...product} />
				))}
			</div>
		</Layout>
	);
}

export default Home;
