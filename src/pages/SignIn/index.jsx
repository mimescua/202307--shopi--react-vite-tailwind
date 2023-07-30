import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import SignInForm from './SignInForm';
import { isEmptyObject } from '../../utils';

function SignIn() {
	const [view, setView] = React.useState('USER-INFO');
	const { saveSignOut, account } = React.useContext(ShoppingCartContext);

	const userHasNoAccount = isEmptyObject(account);
	const handleSignIn = () => {
		saveSignOut(false);
		return <Navigate replace to="/" />;
	};

	return (
		<Layout>
			<div className="flex justify-center items-center relative w-80 mb-4">
				<h1 className="font-medium text-xl">Sign In</h1>
			</div>
			{view === 'CREATE-USER-INFO' ? (
				<SignInForm handleSignIn={handleSignIn} />
			) : (
				<div className="flex flex-col w-80">
					<p>
						<span className="font-light text-sm">Email: </span>
						<span>{account.email}</span>
					</p>
					<p>
						<span className="font-light text-sm">Password: </span>
						<span>{account.password}</span>
					</p>
					<Link to="/">
						<button
							className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
							disabled={userHasNoAccount}
							onClick={() => handleSignIn()}
						>
							Log in
						</button>
					</Link>
					<div className="text-center">
						<a
							className="font-light text-xs underline underline-offset-4"
							href="/"
						>
							Forgot my password
						</a>
					</div>
					<button
						className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
						disabled={!userHasNoAccount}
						onClick={() => setView('CREATE-USER-INFO')}
					>
						Sign up
					</button>
				</div>
			)}
		</Layout>
	);
}

export default SignIn;
