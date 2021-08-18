import styled from 'styled-components';

export const UserContainer = styled.div`
	/* position: relative;
	background: var(--clr-light);
	max-width: 500px;
	width: 100%;
	margin: 20px auto;
	border-radius: 10px; */
	/* margin-bottom: 200px; */
	/* padding-bottom: 50px; */
	h1 {
		text-align: center;
		padding: 20px 0;
		letter-spacing: 1.5px;
	}
	h3 {
		color: var(--sky-blue);
		text-transform: capitalize;
	}
	p {
		font-size: 1.05rem;
		color: var(--dark-gray);
		text-transform: capitalize;
		font-weight: var(--fw-reg);
	}
	small {
		color: var(--dark-gray);
		font-weight: var(--fw-reg);
		span > a {
			color: var(--sky-blue);
			margin-left: 5px;
		}
	}
	@media (max-width: 500px) {
		max-width: 400px;
		p {
			font-size: 1rem;
		}
	}
	@media (max-width: 320px) {
		small {
			font-size: 0.7rem;
			font-weight: 700;
		}
	}
`;

export const GoogleBox = styled.div`
	margin: 30px 0;
	a {
		width: 100%;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--clr-accent);
		color: var(--clr-light);

		span {
			margin: 0 auto;
			font-size: 1.13rem;
		}

		:hover {
			background-color: var(--sky-blue);
			div {
				border: 1px solid var(--sky-blue);
			}
		}
	}
`;

export const GoogleImg = styled.div`
	background-color: var(--clr-light);
	border: 1px solid var(--clr-accent);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 7px;
	border-radius: 5px;
	img {
		width: 25px;
	}
`;

export const Divider = styled.div`
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 20px;
	color: var(--gray-1);
	span {
		padding: 0 15px;
	}
`;
