import React from 'react'
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import OrderCard from '../../components/OrderCard'

function MyOrder() {
	const { order } = React.useContext(ShoppingCartContext);
	return (
		<Layout>
			MyOrder
			<div className="flex flex-col w-80">
				{order?.slice(-1)[0].products.map((product) => (
					<OrderCard
						key={product.id}
						{...product}
					/>
				))}
			</div>
		</Layout>
	);
}

export default MyOrder;
