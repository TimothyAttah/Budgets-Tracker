import React from 'react';
import styled from 'styled-components';
import { ExpensesList } from './ExpensesList'
import { IncomeList } from './IncomeList'
import BackgroundImage from '../../images/bg.jpeg';
import { BudgetsTransaction } from './BudgetsTransaction';

const BudgetsContainer = styled.div`
`;
const Container = styled.div`
  display: flex;
	justify-content: space-between;
`;

const BudgetsContainerTop = styled.div`
	border: 2px dashed green;
	width: 100%;
	padding-top: 42%;
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
			<Container>
				<IncomeList />
				<ExpensesList />
			</Container>
		</BudgetsContainer>
	);
}
