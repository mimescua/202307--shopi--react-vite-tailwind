import React from 'react';

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {
	// Shoping Cart - Increase quantity
	const [count, setCount] = React.useState(0);

	// Product detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Product detail - Show product
	const [productToShow, setProductToShow] = React.useState({});
	
	// Shoping Cart - Add products to car
	const [cartProducts, setCartProducts] = React.useState([]);

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
				cartProducts,
				setCartProducts,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
