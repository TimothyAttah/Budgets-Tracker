import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listExpenses } from '../../redux/actions/expenses';
import {  listIncomes } from '../../redux/actions/income';
import { StoreState } from '../../redux/reducers';

import { Container } from './BudgetTransactionStyles';

export const BudgetsTransaction = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listExpenses());
		dispatch(listIncomes());
	},[dispatch])
	const { expenses } = useSelector((state: StoreState) => state.expenses);
	const { incomes } = useSelector((state: StoreState) => state.incomes);

	const incomeTransactions = incomes.map(income => income.value);
	const expensesTransactions = expenses.map(expense => expense.value);
	const totalIncomesValues = incomeTransactions.reduce((val, results) => (val += results), 0).toFixed(2);
	const totalExpensesValues = expensesTransactions.reduce((val, results) => (val += results), 0).toFixed(2);
	const totalIncomes = parseInt(totalIncomesValues);
	const totalExpenses = parseInt(totalExpensesValues);
	const totalBalance = totalIncomes - totalExpenses;


  return (
		<Container>
			<h2>
				Balance:
				<span>
					{totalBalance > 1
						? `+ ${totalBalance
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
						: `${totalBalance
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
					.00
				</span>
			</h2>
			<h4 className='income'>
				Incomes:
				<span>
					{totalIncomes > 1
						? `+ ${totalIncomes
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
						: `${totalIncomes
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
					.00
				</span>
			</h4>
			<h4 className='expense'>
				Expenses:{' '}
				<span>
					{totalExpenses > 1
						? `- ${totalExpenses
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
						: `${totalExpenses
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
					.00
				</span>
			</h4>
		</Container>
	);
}
