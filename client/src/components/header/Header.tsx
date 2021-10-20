import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserButton, UserButtons } from '../Button';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	background: var(--clr-accent);
	color: var(--clr-light);
	padding: 20px;
	a {
		color: var(--clr-light);
	}
`;

export const HeaderLeft = styled.div`
	border-radius: 50%;
	border: 2px solid var(--clr-light);
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		font-size: 1.5rem;
		font-weight: bold;
		font-style: italic;
	}
	@media (max-width: 450px) {
		margin-top: -30px;
		a {
			font-size: 1rem;
		}
	}
	@media (max-width: 320px) {
		margin-top: -30px;
		a {
			font-size: 0.8rem;
		}
	}
`;

export const HeaderRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h4 {
		margin-right: 30px;
	}
	button {
		padding: 10px;
		border-radius: 10px;
		text-transform: capitalize;
		font-weight: bold;
	}
	@media (max-width: 450px) {
		flex-direction: column;
		h4 {
			margin-right: 0px;
			padding-bottom: 10px;
		}
	}
	@media (max-width: 320px) {
		h4 {
			font-size: 0.8rem;
		}
	}
`;

export const Header = () => {
	const [user] = useState(true);
	return (
		<HeaderContainer>
			<HeaderLeft>
				<Link to='/'>Budgetary</Link>
			</HeaderLeft>
			{user ? (
				<HeaderRight>
					<h4>Naomi Bartholomew</h4>
					<button>Sign out</button>
				</HeaderRight>
			) : (
				<div className='header-right'>
					<UserButtons>
						<Link to='/users/signup'>
							<UserButton>Sign Up</UserButton>
						</Link>
						<Link to='/users/signup'>
							<UserButton>Sign in</UserButton>
						</Link>
					</UserButtons>
					{/* <ButtonGroup variant='contained' color='primary'>
					<UserButton>
						<Link to='/users/signup'>Sign Up</Link>
					</UserButton>
					<UserButton>
						<Link to='/users/signin'>Sign In</Link>
					</UserButton>
				</ButtonGroup> */}
				</div>
			)}
		</HeaderContainer>
	);
};
