import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	h2 {
		text-align: center;
		color: var(--clr-accent);
	}
	form {
		max-width: 500px;
		width: 100%;
		margin-top: 40px;
		padding: 0 10px;
		label {
			font-weight: var(--fw-bold);
			display: inline-block;
			margin-bottom: 5px;
		}
		input {
			display: block;
			width: 100%;
			padding: 15px;
			margin-bottom: 15px;
			border: 1px solid var(--cream);
			border-radius: 5px;
		}
		button {
			display: block;
			width: 100%;
			padding: 15px;
			background: var(--clr-accent);
			color: var(--clr-light);
			border-radius: 5px;
			margin: 20px 0;
			:hover {
				opacity: 0.8;
			}
		}
		small {
			text-transform: capitalize;
			a {
				color: var(--clr-lightBlue);
        font-style: italic;
			}
		}
	}
`;

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
