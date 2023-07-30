import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import ShoppingCart from '../ShoppingCart';
import { isEmptyArray, isEmptyObject } from '../../utils';

function NavBar() {
	const { categories, setSearchByCategory, signOut, saveSignOut, account } =
		React.useContext(ShoppingCartContext);
	const activeStyle = 'underline underline-offset-4';
	const userHasAccount = !isEmptyObject(account);
	const handleSignOut = () => {
		saveSignOut(true);
		// saveAccount({});
	};

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light bg-white">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to={`${signOut ? '/sign-in' : '/'}`}>Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						onClick={() => setSearchByCategory('')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				{!isEmptyArray(categories) &&
					categories.map((category, index) => (
						<li key={index}>
							<NavLink
								to={`/${category.url}`}
								onClick={() => setSearchByCategory(category.name.toLowerCase())}
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								{category.name}
							</NavLink>
						</li>
					))}
			</ul>
			<ul className="flex items-center gap-3">
				{userHasAccount && !signOut ? (
					<>
						<li className="text-black/60">{account?.email}</li>
						<li>
							<NavLink
								to="/my-orders"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								My Orders
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/my-account"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>
								My Account
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/sign-in"
								className={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
								onClick={() => handleSignOut()}
							>
								Sign Out
							</NavLink>
						</li>
					</>
				) : (
					<li>
						<NavLink
							to="/sign-in"
							className={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={() => handleSignOut()}
						>
							Sign In
						</NavLink>
					</li>
				)}
				<li className="flex items-center">
					<ShoppingCart />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
