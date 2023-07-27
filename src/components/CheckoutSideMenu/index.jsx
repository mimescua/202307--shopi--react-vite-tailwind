import React from 'react';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/outline';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils'

function CheckoutSideMenu() {
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
		setCartProducts,
	} = React.useContext(ShoppingCartContext);

	const handleDelete = (id) => {
		const filteredProducts = cartProducts.filter((product) => product.id != id);
		setCartProducts(filteredProducts);
	};
	const total = totalPrice(cartProducts)

	return (
		<aside
			className={`${
				isCheckoutSideMenuOpen ? 'flex' : 'hidden'
			} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)] top-[68px]`}
		>
			<div className="flex justify-between items-center p-2">
				<h2 className=" font-medium text-xl">My Order</h2>
				<div>
					<XMarkIcon
						onClick={() => closeCheckoutSideMenu()}
						className="h-6 w-6 text-black cursor-pointer"
					/>
				</div>
			</div>
			<div className="px-6 overflow-y-scroll">
				{cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						{...product}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className='px-6'>
				<p className='flex justify-between items-center'>
					<span className='font-light'>{total? 'Total:': ''}</span>
					<span className='font-medium text-2xl'>{total? `$${total}`: ''}</span>
				</p>
			</div>
		</aside>
	);
}

export default CheckoutSideMenu;
