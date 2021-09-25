import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles';


export const Signup = () => {
  return (
		<Container>
			<h2>Budgetary</h2>
			<form>
				<label htmlFor='firstName'>First Name:</label>
				<input type='text' placeholder='Enter first name' />
				<label htmlFor='lastName'>Last Name:</label>
				<input type='text' placeholder='Enter last name' />
				<label htmlFor='email'>Email:</label>
				<input type='email' placeholder='Enter email' />
				<label htmlFor='password'>Password:</label>
				<input type='password' placeholder='Enter your password' />
				<label htmlFor='password'>Repeat Password:</label>
				<input type='password' placeholder='Repeat your password' />
        <button>Sign up</button>
        <small>Already have an account? <Link to='/users/signin'>Sign in here</Link></small>
			</form>
		</Container>
	);
}
