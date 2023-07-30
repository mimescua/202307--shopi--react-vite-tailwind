import React from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../context';
import SignInForm from '../SignIn/SignInForm';

function MyAccount() {
	const [view, setView] = React.useState('USER-INFO');
	const form = React.useRef(null);
	const { account, saveAccount } = React.useContext(ShoppingCartContext);
	return (
		<Layout>
			<div className="flex justify-center items-center relative w-80 mb-4">
				<h1 className="font-medium text-xl">My Account</h1>
			</div>
			{view === 'EDIT-USER-INFO' ? (
				<SignInForm setView={setView} />
			) : (
				<div className="flex flex-col w-80">
					<p>
						<span className="font-light text-sm">Name: </span>
						<span>{account?.name}</span>
					</p>
					<p>
						<span className="font-light text-sm">Email: </span>
						<span>{account?.email}</span>
					</p>
					<button
						className="border border-black rounded-lg mt-6 py-3"
						onClick={() => setView('EDIT-USER-INFO')}
					>
						Edit
					</button>
				</div>
			)}
		</Layout>
	);
}

export default MyAccount;
