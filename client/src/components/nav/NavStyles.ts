import styled from 'styled-components';

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* background-color: white; */
	background-color: var(--clr-accent);
	margin-top: 20px;
`;

export const NavCenter = styled.ul`
	display: flex;
	width: 600px;
	height: 50px;
	justify-content: space-between;
	align-items: center;
	li a {
		display: flex;
		color: var(--clr-dark);
		color: var(--clr-light);
		padding: 9px 10px;
		span {
			margin-left: 10px;
		}
		:hover {
			border-bottom: 2px solid black;
		}
	}
	@media (max-width: 650px) {
		width: 450px;
		li a {
			padding: 9px 5px;
			span {
				margin-left: 8px;
			}
		}
	}
	@media (max-width: 540px) {
		display: none;
	}
`;

export const NavRight = styled.div`
	display: flex;
	align-items: center;
	a .MuiButton-root {
		color: var(--clr-dark);
		background: var(--clr-light);
	}
	@media (max-width: 800px) {
		a > .MuiButton-root .txt {
			display: none;
		}
		a > .MuiButton-root {
			min-width: 5px;
			padding: 3px;
		}
	}
	@media (max-width: 530px) {
		a > .MuiButton-root .txt {
			display: flex;
		}
	}
`;

export const ActiveLink = {
	borderBottom: '2px solid black',
	backgroundColor: 'blue',
};