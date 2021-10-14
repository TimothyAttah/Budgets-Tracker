import React from 'react';
import styled from 'styled-components';
import { ExpensesList } from './ExpensesList'
import { IncomeList } from './IncomeList'
import BackgroundImage from '../../images/back.jpg';
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
	height: 40vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
		url(${BackgroundImage});
	background-size: cover;
	background-position: center;
	position: relative;
`;

export const Budgets = () => {
	
	// console.log('this year.....', year);
  return (
		<BudgetsContainer>
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
