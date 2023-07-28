import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import OrdersCard from '../../components/OrdersCard';

function MyOrders() {
	const { order } = React.useContext(ShoppingCartContext);
	return (
		<Layout>
			<div className="flex justify-center items-center relative w-80 mb-4">
				<h1 className="font-medium text-xl">My Orders</h1>
			</div>
			{order.map(({ totalProducts, totalPrice }, index) => (
				<Link key={index} to={`/my-orders/${index}`}>
					<OrdersCard totalProducts={totalProducts} totalPrice={totalPrice} />
				</Link>
			))}
		</Layout>
	);
}

export default MyOrders;
