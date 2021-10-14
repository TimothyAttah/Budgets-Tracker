import React from 'react';
import styled from 'styled-components';
import { ExpensesList } from './ExpensesList'
import { IncomeList } from './IncomeList'
import BackgroundImage from '../../images/bg.jpeg';
import { BudgetsTransaction } from './BudgetsTransaction';
import { CreateBudgets } from './CreateBudgets';

const BudgetsContainer = styled.div`
`;
const Container = styled.div`
  display: flex;
	justify-content: space-between;
	/* margin: auto; */
`;

const BudgetsContainerTop = styled.div`
	/* width: 100%;
	height: 400px; */
	min-width: 20vw;
	/* padding-top: 30%; */
	background: url(${BackgroundImage}) no-repeat center;
	background-size: cover;
	position: relative;
`;

export const Budgets = () => {
	let now = new Date()
	let months = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	]

	let month = now.getMonth();		
		
	let year = now.getFullYear();

	console.log('this year.....', year);
  return (
		<BudgetsContainer>
			<h2>Available budget in {months[month]} {year}: </h2>
			<BudgetsContainerTop>
				<BudgetsTransaction />
			</BudgetsContainerTop>
			<div>
				<CreateBudgets />
			</div>
			<Container>
				<IncomeList />
				<ExpensesList />
			</Container>
		</BudgetsContainer>
	);
}
