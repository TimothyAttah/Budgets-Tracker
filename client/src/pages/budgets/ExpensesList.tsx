import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { listExpenses, deleteExpenses } from '../../redux/actions/expenses';
import { StoreState } from '../../redux/reducers';
import { Button, ButtonGroup } from '@material-ui/core';
import { listIncomes } from '../../redux/actions/income';

export const Container = styled.div`
	width: 45%;
	margin-top: 30px;
	@media (max-width: 450px) {
		width: 48%;
		h2 {
			font-size: 1.5rem;
		}
	}
`;

export const ExpensesListItem = styled.ul`
	margin-top: 20px;

	li {
		display: flex;
		justify-content: space-between;
		background-color: var(--gray-4);
		/* background: linear-gradient(to bottom, green, red); */
		background: linear-gradient(90deg, rgb(63 81 181 / 50%), white);
		box-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
		color: var(--clr-dark);
		text-transform: capitalize;
		margin-bottom: 10px;
		font-size: 1.2rem;
		padding: 15px 10px;
		border-radius: 5px;
		:hover {
			opacity: 0.8;
		}
		@media (max-width: 850px) {
			flex-direction: column;
		}
		@media (max-width: 360px) {
			font-size: 0.9rem;
			font-weight: bold;
		}
	}
`;

export const ExpensesListItemLeft = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
	span {
		font-style: italic;
		font-weight: bolder;
		display: flex;
		padding: 0 5px;
		align-items: flex-end;
	}
	@media (max-width: 850px) {
		width: 100%;
		align-items: flex-end;
	}
`;
export const ExpensesListItemRight = styled.div`
	display: flex;
	justify-content: right;
	button {
		background-color: #e5e5e5;
		color: teal;
		.MuiSvgIcon-root {
			font-size: 25px;
		}
	}
	@media (max-width: 850px) {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: right;
		border-top: 2px solid var(--clr-dark);
		margin-top: 20px;
		padding-top: 10px;
	}
`;
export const ExpensesList = () => {
	const dispatch = useDispatch();
	 useEffect(() => {
		 dispatch(listExpenses());
		 dispatch(listIncomes());
	 }, [dispatch]);
	
	const { expenses } = useSelector((state: StoreState) => state.expenses);
	const { incomes } = useSelector((state: StoreState) => state.incomes);

	const incomeTransactions = incomes.map(income => income.value);
	const totalIncomesValues = incomeTransactions
		.reduce((val, results) => (val += results), 0)
		.toFixed(2);
	
	const totalIncomes = parseInt(totalIncomesValues);
//  const toExpensesTransactions = expensesTransactions.map(exp =>
// 		Math.round((exp / totalIncomes) * 100)
//  );
//  console.log('total expenses<<<<<>>>>>>>>>', toExpensesTransactions);
	
	
	// if (expenses > 0) {
	// 	percentage + '%'
	// } else {
	// 	'---'
	// }



	const handleDelete = (id: number | string) => {
		dispatch(deleteExpenses(id))
	}
  return (
		<Container>
			<h2>Expenses</h2>
			<ExpensesListItem>
				{expenses.length ? (
					expenses.map(expense => (
						<li key={expense.expenses_id}>
							<ExpensesListItemLeft>
								{expense.content}:
								<span>
									-{' '}
									{expense.value
										.toFixed(2)
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
								</span>
								<span>{Math.round((expense.value / totalIncomes) * 100)}%</span>
							</ExpensesListItemLeft>

							<ExpensesListItemRight>
								<ButtonGroup variant='contained'>
									<Link to={`/edit/${expense.expenses_id}`}>
										<Button>
											<Edit />
										</Button>
									</Link>
									<Button onClick={() => handleDelete(expense.expenses_id)}>
										<Delete />
									</Button>
								</ButtonGroup>
							</ExpensesListItemRight>
						</li>
					))
				) : (
					<h3>You have no expenses yet...</h3>
				)}
			</ExpensesListItem>
		</Container>
	);
}
