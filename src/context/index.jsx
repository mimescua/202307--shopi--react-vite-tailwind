import React from 'react';

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = ({ children }) => {
	const [count, setCount] = React.useState(0);

	return (
		<ShoppingCartContext.Provider value={{ count, setCount }}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
