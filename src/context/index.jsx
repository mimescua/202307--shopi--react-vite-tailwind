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

	// Checkout side menu - Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	// Shoping Cart - Order
	const [order, setOrder] = React.useState([]);

	// Get products
	const [products, setProducts] = React.useState(null);
	const [filteredProducts, setFilteredProducts] = React.useState(null);

	// Get products by title
	const [searchByTitle, setSearchByTitle] = React.useState('');

	React.useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	const filteredItemsByTitle = () => {
		return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
	}

	React.useEffect(() => {
		if(searchByTitle) setFilteredProducts(filteredItemsByTitle(products, searchByTitle))
	}, [products, searchByTitle]);

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
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
				order,
				setOrder,
				products,
				setProducts,
				searchByTitle,
				setSearchByTitle,
				filteredProducts
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
