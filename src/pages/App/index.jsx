import React from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import './App.css';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import Nabvar from '../../components/Navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import { ShoppingCartContext } from '../../context';
import { isEmptyObject } from '../../utils';

const AppRoutes = () => {
	const { signOut, account } = React.useContext(ShoppingCartContext);

	const userHasAccount = !isEmptyObject(account);
	const userIsNotSignOut = !signOut;

	let routes = useRoutes([
		{
			path: '/',
			element:
				userHasAccount && userIsNotSignOut ? (
					<Home />
				) : (
					<Navigate replace to="/sign-in" />
				),
		},
		{
			path: '/mens-clothing',
			element:
				userHasAccount && userIsNotSignOut ? (
					<Home />
				) : (
					<Navigate replace to="/sign-in" />
				),
		},
		{
			path: '/womens-clothing',
			element:
				userHasAccount && userIsNotSignOut ? (
					<Home />
				) : (
					<Navigate replace to="/sign-in" />
				),
		},
		{
			path: '/electronics',
			element:
				userHasAccount && userIsNotSignOut ? (
					<Home />
				) : (
					<Navigate replace to="/sign-in" />
				),
		},
		{
			path: '/jewelery',
			element:
				userHasAccount && userIsNotSignOut ? (
					<Home />
				) : (
					<Navigate replace to="/sign-in" />
				),
		},
		{
			path: '/my-account',
			element:
				userHasAccount && signOut ? (
					<Navigate replace to="/sign-in" />
				) : (
					<MyAccount />
				),
		},
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:id', element: <MyOrder /> },
		{ path: '/sign-in', element: <SignIn /> },
		{ path: '/*', element: <NotFound /> },
	]);
	return routes;
};

function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<Nabvar />
				<CheckoutSideMenu />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}

export default App;
