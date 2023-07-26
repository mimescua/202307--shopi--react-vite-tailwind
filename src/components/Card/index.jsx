import React from 'react';
import { ShoppingCartContext } from '../../context';
import { PlusSmallIcon, CheckIcon } from '@heroicons/react/24/outline';

function Card({ id, price, title, image, category, description }) {
	const { 
		count,
		setCount,
		openProductDetail,
		closeProductDetail,
		setProductToShow,
		cartProducts,
		setCartProducts,
		openCheckoutSideMenu,
	} = React.useContext(ShoppingCartContext);

	const showProduct = () => {
		setProductToShow({ price, title, image, category, description });
		openProductDetail();
	};

	const addProductsToCArt = (event) => {
		event.stopPropagation()
		closeProductDetail()
		setCount(count + 1)
		setCartProducts([...cartProducts, { id, price, title, image, category, description }])
		openCheckoutSideMenu()
	};
	
	const renderIcon = (id) => {
		const isInCart =
			cartProducts.filter((product) => product.id === id).length > 0;
		if (isInCart) {
			return (
				<div
					className="absolute top-0 right-0 flex justify-center items-center bg-green-800 w-6 h-6 rounded-full m-2 p-1"
				>
					<CheckIcon className="h-6 w-6 text-white" />
				</div>
			);
		} else {
			return (
				<div
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
					onClick={(event) => addProductsToCArt(event)}
				>
					<PlusSmallIcon className="h-6 w-6 text-black" />
				</div>
			);
		}
	};

	return (
		<div
			className="bg-white cursor-pointer w-56 h-60 rounded-lg"
			onClick={showProduct}
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{category}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={image}
					alt={title}
				/>
				{ renderIcon(id) }
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light truncate mr-2">{title}</span>
				<span className="text-lg font-medium">{`$${price}`}</span>
			</p>
		</div>
	);
}

export default Card;
