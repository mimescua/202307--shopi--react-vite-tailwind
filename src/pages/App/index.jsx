import { useRoutes, BrowserRouter } from 'react-router-dom';
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

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
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
