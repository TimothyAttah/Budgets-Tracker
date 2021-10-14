import styled from "styled-components";

export const Container = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	color: var(--clr-light);
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: auto;
	text-align: center;

	h2 {
		width: 50%;
		margin-top: 50px;
		margin-bottom: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		text-align: center;
	}

	.income {
		background-color: green;
		color: var(--clr-light);
		padding: 10px 20px;
		width: 50%;
		font-size: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.expense {
		background-color: #ff5049;
		color: var(--clr-light);
		padding: 10px 20px;
		width: 50%;
		font-size: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 15px;
	}

	.body__container{
		color: #555;
		font-family: Open Sans;
		font-size: 16px;
		height: 100vh;
		font-weight: 4;
		position: relative;
	}
	.top__containers{
		height: 40vh;
		background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(back.png);
		background-size: cover;
		background-position: center;
		position: relative;
	}
	@media (max-width: 1000px) {
		h2 {
			width: 60%;
		}
	}
	@media (max-width: 770px) {
		h2 {
			font-size: 2rem;
		}
		h2,
		.income,
		.expense {
			flex-direction: row;
			width: 70%;
		}
		h2 {
			span {
				padding-top: 0px;
			}
		}
	}
	@media (max-width: 600px) {
		h2 {
			font-size: 1.5rem;
		}
		.income,
		.expense {
			font-size: 1.2rem;
		}
	}
	@media (max-width: 420px) {
		h2,
		.income,
		.expense {
			flex-direction: column;
		}
		h2 {
			span {
				padding-top: 15px;
			}
		}
	}
	@media (max-width: 320px) {
		h2 {
			font-size: 1.4rem;
		}
		.income,
		.expense {
			font-size: 1rem;
		}
	}
	@media (max-width: 280px) {
		h2 {
			font-size: 1.2rem;
		}
		.income,
		.expense {
			font-size: 0.9rem;
		}
	}
`;
