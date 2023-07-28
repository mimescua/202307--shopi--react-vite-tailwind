import React from 'react';

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {
	// Get products
	const [products, setProducts] = React.useState([]);
	const [productsBySearch, setProductsBySearch] = React.useState([]);

	// Site Categories
	const [categories, setCategories] = React.useState([]);

	// Product detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Product detail - Show product
	const [productToShow, setProductToShow] = React.useState({});

	// Checkout side menu - Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	// Shoping Cart - Order
	const [order, setOrder] = React.useState([]);

	// Shoping Cart - Add products to car
	const [cartProducts, setCartProducts] = React.useState([]);

	// Get products by title
	const [searchByTitle, setSearchByTitle] = React.useState('');

	// Get products by category
	const [searchByCategory, setSearchByCategory] = React.useState('');
	const productsByCategory = products.filter((product) =>
		product.category.toLowerCase().includes(searchByCategory.toLowerCase())
	)

	React.useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	React.useEffect(() => {
		const categoriesIni = products.map(product => product.category)
		const categoriesSet = new Set([...categoriesIni])
		const categoriesArr = Array.from(categoriesSet)
		const categoriesObjArr = categoriesArr.map(category => {
			const url = category.replace(/[^a-zA-Z0-9 ]/g, '').replace(' ', '-')
			const name = category.charAt(0).toUpperCase() + category.slice(1);
			return { url, name }
		})

		setCategories(categoriesObjArr)
	}, [products]);

	React.useEffect(() => {
		if(searchByCategory && searchByTitle){
			const categoryProducts = productsByCategory?.filter(product => product.category.toLowerCase() === searchByCategory.toLowerCase())
			setProductsBySearch(categoryProducts?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase())))
		} else {
			searchByCategory
			? setProductsBySearch(productsByCategory?.filter(product => product.category.toLowerCase() === searchByCategory.toLowerCase()))
			: setProductsBySearch(products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase())))
		}
		
	}, [products, searchByTitle, searchByCategory]);

	return (
		<ShoppingCartContext.Provider
			value={{
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
				categories,
				searchByTitle,
				setSearchByTitle,
				setSearchByCategory,
				productsBySearch,
				productsByCategory
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
