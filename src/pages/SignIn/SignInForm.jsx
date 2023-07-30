import React from 'react';
import { ShoppingCartContext } from '../../context';

function SignInForm({ setView }) {
	const form = React.useRef(null);
	const { account, saveAccount } = React.useContext(ShoppingCartContext);

	const createAnAccount = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const { name, email, password } = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
		};

		if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
			alert('Please fill out all fields.');
			return;
		}

		saveAccount({ name, email, password });
		if (setView) setView('USER-INFO');
	};

	const nameDefaultValue = account?.name || '';
	const emailDefaultValue = account?.email || '';
	const passwordDefaultValue = account?.password || '';

	return (
		<form
			ref={form}
			className="flex flex-col w-80"
			onSubmit={(e) => createAnAccount(e)}
		>
			<label htmlFor="name">your name: </label>
			<input
				id="name"
				name="name"
				type="text"
				placeholder="Name"
				defaultValue={nameDefaultValue}
				className="border border-black rounded-lg py-3 px-2 mt-2 mb-4"
			/>
			<label htmlFor="email">Your email:</label>
			<input
				id="email"
				name="email"
				type="email"
				defaultValue={emailDefaultValue}
				placeholder="me@helloworld.com"
				className="border border-black rounded-lg py-3 px-2 mt-2 mb-4"
			/>
			<label htmlFor="password" className=" text-base">
				Your password:
			</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="********"
				defaultValue={passwordDefaultValue}
				className="border border-black rounded-lg py-3 px-2 mt-2 mb-4"
			/>
			<button
				type="submit"
				className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
			>
				Save
			</button>
		</form>
	);
}

export default SignInForm;
