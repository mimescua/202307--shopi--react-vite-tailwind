/**
 * This function calculates total price of a new orders
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) =>
	products.reduce((sum, product) => {
		return sum + product.price;
	}, 0);

export const isEmptyObject = (obj) => {
	return JSON.stringify(obj) === '{}';
};

export const isEmptyArray = (arr) => {
	return JSON.stringify(arr) === '[]';
};
