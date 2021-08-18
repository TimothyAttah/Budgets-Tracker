import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Book } from '@material-ui/icons';

const Header = styled.header`
	position: fixed;
	max-width: 2000px;
	width: 100%;
	margin: 0 auto;
	padding: 25px 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9990;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
	background-color: var(--clr-lightBlue);
	h1 a {
		color: var(--clr-light);
	}
	h2 a {
		display: none;
		color: var(--clr-light);
	}
	@media (max-width: 800px) {
		h1 a {
			font-size: 2.5rem;
		}
	}
	@media (max-width: 500px) {
		h1 {
			display: none;
		}
		h2 a {
			display: flex;
		}
	}
`;

const HeaderButton = styled.div`
	a {
		color: var(--white);
		padding: 5px 10px;
	}
	@media (max-width: 500px) {
		button {
			width: 80px;
		}
	}
`;

export const UserHeader = () => {
	return (
		<Header>
			<h1>
				<Link to='/'>Note3Sixty</Link>
			</h1>
			<h2>
				<Link to='/'>
					<Book />
				</Link>
			</h2>
			<HeaderButton>
				<ButtonGroup variant='contained' color='primary'>
					<Button>
						<Link to='/users/signup'>SignUp</Link>
					</Button>
					<Button>
						<Link to='/users/signin'>SignIn</Link>
					</Button>
				</ButtonGroup>
			</HeaderButton>
		</Header>
	);
};
