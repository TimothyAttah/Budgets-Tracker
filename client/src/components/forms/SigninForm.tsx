import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';

// import { signIn } from '../../redux/actions/auth';

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

export const SigninForm = () => {
	// const dispatch = useDispatch();
	// const {isLoading }= useSelector( state => state.auth )

	// const [isFetching, setIsFetching] = useState(isLoading)
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// dispatch(signIn(userData));
		// setIsFetching( !isLoading )
		// setIsFetching(isLoading)
	};
	return (
		<>
			<FormContainer onSubmit={handleSubmit}>
				<label htmlFor='email'>Email Address:</label>
				<input
					type='email'
					placeholder='example@example.com'
					name='email'
					value={userData.email}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					placeholder='Enter your password'
					name='password'
					value={userData.password}
					onChange={handleChange}
				/>
				{/* <Button type="submit" variant='contained'>{isFetching ? 'Loading': 'Sign In'}</Button> */}
				<Button type='submit' variant='contained'>
					{' '}
					Sign In
				</Button>
			</FormContainer>
		</>
	);
};
