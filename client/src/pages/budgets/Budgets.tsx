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
