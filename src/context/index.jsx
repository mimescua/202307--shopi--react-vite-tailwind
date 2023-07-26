import React from 'react';

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {
	// shoping Cart - Increase quantity
	const [count, setCount] = React.useState(0);

	// Product detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Product detail - Show product
	const [productToShow, setProductToShow] = React.useState({});

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				setProductToShow,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
