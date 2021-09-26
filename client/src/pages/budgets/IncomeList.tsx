import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { listIncome, deleteIncome } from '../../redux/actions/income';
import { StoreState } from '../../redux/reducers';

export const Container = styled.div`
	width: 50%;
 @media (max-width: 450px){
   h2{
     font-size: 1.5rem;
   }
 }
`;

export const IncomesListItem = styled.ul`
	width: 100%;
	margin-top: 20px;
	li {
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: space-between;
		background-color: var(--clr-light);
		border: 2px solid green;
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

export const IncomeListItemLeft = styled.div`
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
export const IncomeListItemRight = styled.div`
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

export const IncomeList = () => {
	const dispatch = useDispatch();
	const { incomes } = useSelector((state: StoreState) => state.incomes);
	useEffect(() => {
		dispatch(listIncome());
	}, [dispatch]);

	const handleDelete = (id: number | string) => {
		dispatch(deleteIncome(id));
	}


	return (
		<Container>
			<h2>Incomes</h2>
			<IncomesListItem>
				{incomes.length ? (
					incomes.map(income => (
						<li key={income.id}>
							<IncomeListItemLeft>
								{income.content}: <span>{income.value}</span>
							</IncomeListItemLeft>
							<IncomeListItemRight>
								<button>
									<Edit />
								</button>
								<button onClick={()=> handleDelete(income.id)}>
									<Delete />
								</button>
							</IncomeListItemRight>
						</li>
					))
				) : (
					<h3>You have no income yet...</h3>
				)}
			</IncomesListItem>
		</Container>
	);
};
