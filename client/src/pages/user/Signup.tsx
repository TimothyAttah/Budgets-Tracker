import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../redux/actions/auth';
import { Container } from './styles';


export const Signup = () => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(signUpUser(userData));
	};

  return (
		<Container>
			<h2>Budgetary</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name:</label>
				<input
					type='text'
					value={userData.firstName}
					onChange={handleChange}
					placeholder='Enter first name'
				/>
				<label htmlFor='lastName'>Last Name:</label>
				<input
					type='text'
					placeholder='Enter last name'
					value={userData.lastName}
					onChange={handleChange}
				/>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					placeholder='Enter email'
					value={userData.email}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					placeholder='Enter your password'
					value={userData.password}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Repeat Password:</label>
				<input type='password' placeholder='Repeat your password' />
				<button>Sign up</button>
				<small>
					Already have an account? <Link to='/users/signin'>Sign in here</Link>
				</small>
			</form>
		</Container>
	);
}
