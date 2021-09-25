import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: var(--clr-light);
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	/* position: absolute;
	top: 30px;
	left: 40%;
	transform: translateX(-50%); */
	text-align: center;
	margin-top: -40%;

	h2 {
		width: 95%;
		margin-top: 10px;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
    margin-bottom: 10px;
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
	@media (max-width: 650px) {
		.income,
		.expense {
			width: 70%;
		}
	}
	@media (max-width: 500px) {
		h2,
		.income,
		.expense {
			flex-direction: column;
		}
	}
	@media (max-width: 320px) {
		h2 {
			font-size: 1.8rem;
			font-weight: bold;
			span {
				padding-top: 10px;
			}
		}
		.income,
		.expense {
			font-size: 1.1rem;
			font-weight: bold;
			padding: 5px 20px;
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
