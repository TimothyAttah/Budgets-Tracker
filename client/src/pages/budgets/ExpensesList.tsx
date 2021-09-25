import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { listExpenses } from '../../redux/actions/expenses';
import { StoreState } from '../../redux/reducers';

export const Container = styled.div`
	width: 50%;
	@media (max-width: 450px) {
		h2 {
			font-size: 1.5rem;
		}
	}
`;

export const ExpensesListItem = styled.ul`
	width: 100%;
	margin-top: 20px;
	li {
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: space-between;
		background-color: var(--clr-light);
    border: 2px solid red;
		color: var(--clr-dark);
		text-transform: capitalize;
		margin-bottom: 10px;
		font-size: 1.2rem;
		padding: 5px 10px;
		border-radius: 5px;
		:hover {
			opacity: 0.8;
		}
		@media (max-width: 600px) {
			flex-direction: column;
		}
		@media (max-width: 340px) {
			font-size: 0.8rem;
      font-weight: bolder;
		}
	}
`;

export const ExpensesListItemLeft = styled.div`
	width: 70%;
	display: flex;

	justify-content: space-between;
	span {
		font-style: italic;
		font-weight: bolder;
		padding: 0 5px;
		border-left: 2px solid var(--clr-dark);
		border-right: 2px solid var(--clr-dark);
	}
	@media (max-width: 600px) {
		width: 100%;
		align-items: flex-end;
	}
	span {
		margin-left: 20px;
	}
`;
export const ExpensesListItemRight = styled.div`
	/* margin-top: 8px; */
	button {
		margin: 0 5px;
		background-color: var(--clr-light);
		color: teal;
		.MuiSvgIcon-root {
			font-size: 15px;
		}
	}
	@media (max-width: 600px) {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: right;
		border-top: 2px solid var(--clr-dark);
		padding-top: 20px;
	}
`;
export const ExpensesList = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state: StoreState) => state.expenses);
  useEffect(() => {
    dispatch(listExpenses())
  }, [dispatch]);
  return (
		<Container>
			<h2>Expenses</h2>
			<ExpensesListItem>
				{expenses.length ? (
					expenses.map(expense => (
						<li key={expense.id}>
							<ExpensesListItemLeft>
								{expense.content}: <span>{expense.value}</span>
							</ExpensesListItemLeft>
							<ExpensesListItemRight>
								<button>
									<Edit />
								</button>
								<button>
									<Delete />
								</button>
							</ExpensesListItemRight>
						</li>
					))
				) : (
					<h2>You have no expenses yet...</h2>
				)}
			</ExpensesListItem>
		</Container>
	);
}
