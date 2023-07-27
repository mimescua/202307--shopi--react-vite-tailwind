import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import OrderCard from '../../components/OrderCard'

function MyOrder() {
	const { order, closeCheckoutSideMenu } = React.useContext(ShoppingCartContext);
	const currentPath = window.location.pathname;
	let [index] = currentPath.split('/')?.slice(-1)
	if(index === 'last') index = order?.length - 1

	return (
		<Layout>
			<div className='flex justify-center items-center relative w-80 mb-4'>
				<Link to="/my-orders" className='absolute left-0'>
					<ChevronLeftIcon
						onClick={() => closeCheckoutSideMenu()}
						className="h-6 w-6 text-black cursor-pointer"
					/>
				</Link>
				<h1 className='font-medium text-xl'>My Order</h1>
			</div>
			<div className="flex flex-col w-80">
				{order?.[index].products.map((product) => (
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
