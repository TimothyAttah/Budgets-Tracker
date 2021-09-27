import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
		background-color: red;
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
			font-size: .9rem;
		}
	}
`;

export const BudgetsTransaction = () => {
  return (
		<Container>
			<h2>
				Balance: <span>+ 123,456,790.00</span>
			</h2>
			<h4 className='income'>
				Incomes: <span>+ 123,456,790.00</span>
			</h4>
			<h4 className='expense'>
				Expenses: <span> - 123,456,790.00</span>
			</h4>
		</Container>
	);
}
