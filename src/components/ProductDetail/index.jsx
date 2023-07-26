import React from 'react';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ProductDetail() {
	const { isProductDetailOpen, closeProductDetail, productToShow } =
		React.useContext(ShoppingCartContext);
	const { price, title, image, category, description } = productToShow;

	return (
		<aside
			className={`${
				isProductDetailOpen ? 'flex' : 'hidden'
			} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)] top-[68px]`}
		>
			<div className="flex justify-between items-center p-2">
				<h2 className=" font-medium text-xl">Detail</h2>
				<div>
					<XMarkIcon
						onClick={() => closeProductDetail()}
						className="h-6 w-6 text-black cursor-pointer"
					/>
				</div>
			</div>
			<figure className="px-6">
				<img className="w-full h-full rounded-lg" src={image} al={title} />
			</figure>
			<p className="flex flex-col p-6">
				<span className="font-medium text-2xl mb-2">${price}</span>
				<span className="font-medium text-md">{title}</span>
				<span className="font-light text-sm">{description}</span>
			</p>
		</aside>
	);
}

export default ProductDetail;
