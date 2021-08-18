import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';

// import { signUp } from '../../redux/actions/auth';
import { toast } from 'react-toastify';

const FormContainer = styled.form`
	margin: 20px 0;
	label {
		font-weight: var(--fw-bold);
	}
	input {
		display: block;
		width: 100%;
		border: 1px solid var(--gray-3);
		margin-top: 5px;
		margin-bottom: 20px;
		padding: 15px;
		border-radius: 5px;
		font-size: 1rem;
		background: rgba(196, 196, 196, 0.05);
		::placeholder {
			color: var(--gray-4);
		}
	}
	button {
		width: 100%;
		padding: 12px;
		border-radius: 5px;
		background-color: var(--sky-blue);
		color: var(--clr-light);
		font-weight: var(--fw-bold);
		:hover {
			background-color: var(--darker-sky-blue);
		}
	}
`;

export const SignupForm = () => {
	// const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleUserData = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userData.confirmPassword !== userData.password) {
			// userData.confirmPassword.setCustomValidity( "Passwords don't match" );
			toast.error("passwords don't match. Try again.");
		} else {
			console.log(userData);
			// dispatch(signUp(userData));
		}
		// setUserData({
		// 	firstName: '',
		// 	lastName: '',
		// 	email: '',
		// 	password: '',
		// 	confirmPassword: '',
		// });
	};
	return (
		<>
			<FormContainer onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name:</label>
				<input
					type='text'
					placeholder='Enter your first name'
					name='firstName'
					value={userData.firstName}
					onChange={handleUserData}
				/>
				<label htmlFor='lastName'>Last Name:</label>
				<input
					type='text'
					placeholder='Enter your last name'
					name='lastName'
					value={userData.lastName}
					onChange={handleUserData}
				/>
				<label htmlFor='email'>Email Address:</label>
				<input
					type='email'
					placeholder='example@example.com'
					name='email'
					value={userData.email}
					onChange={handleUserData}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					placeholder='Enter your password'
					name='password'
					value={userData.password}
					onChange={handleUserData}
				/>
				<label htmlFor='confirmPassword'>Confirm Password:</label>
				<input
					type='password'
					placeholder='Confirm your password'
					name='confirmPassword'
					value={userData.confirmPassword}
					onChange={handleUserData}
				/>
				<Button type='submit' variant='contained'>
					Sign Up
				</Button>
			</FormContainer>
		</>
	);
};
