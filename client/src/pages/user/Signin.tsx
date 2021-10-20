import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Signin = () => {
	return (
		<Container>
			<h2>Budgetary</h2>
			<form>
				<label htmlFor='email'>Email:</label>
				<input type='email' placeholder='Enter email' />
				<label htmlFor='password'>Password:</label>
				<input type='password' placeholder='Enter your password' />
				<button>Sign in</button>
				<small>
					Don't have an account? <Link to='/users/signup'>Sign up here</Link>
				</small>
			</form>
		</Container>
	);
};
