import React from 'react';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/outline';

function OrderCard({ id, price, title, image, handleDelete }) {
	return (
		<div className="flex justify-between items-center mb-3">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-cover"
						src={image}
						alt={title}
					/>
				</figure>
				<p className="text font-light">{title}</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className=" text-lg font-medium">{price}</p>
				<XMarkIcon
					onClick={() => handleDelete(id)}
					className="h-6 w-6 text-black cursor-pointer"
				/>
			</div>
		</div>
	);
}

export default OrderCard;
