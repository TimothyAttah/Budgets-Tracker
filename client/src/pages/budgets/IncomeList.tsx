import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { listIncome } from '../../redux/actions/income';
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
		display: flex;
		justify-content: space-between;
		background-color: green;
    color: var(--clr-light);
		text-transform: capitalize;
		margin-bottom: 10px;
		font-size: 1.2rem;
		padding: 5px 10px;
    border-radius: 5px;
    :hover{
      opacity: 0.8;
    }
    @media (max-width: 600px){
      flex-direction: column;
    }
    @media (max-width: 340px){
      font-size: .8rem;
    }

	}
`;

export const IncomeListItemLeft = styled.div`
	width: 70%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	span {
		font-style: italic;
		font-weight: bolder;
		padding: 0 5px;
		border-left: 2px solid var(--clr-light);
		border-right: 2px solid var(--clr-light);
	}
	@media (max-width: 600px) {
		width: 100%;
	}
	span {
    margin-left: 20px;
	}
`;
export const IncomeListItemRight = styled.div`
margin-top: 8px;
	button {
		margin: 0 5px;
		background-color: green;
		color: crimson;
		.MuiSvgIcon-root {
			font-size: 15px;
		}
	}
	@media (max-width: 600px) {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
    justify-content: right;
    border-top: 2px solid var(--clr-light);
    padding-top: 20px;
	}
`;

export const IncomeList = () => {
	const dispatch = useDispatch();
	const { incomes } = useSelector((state: StoreState) => state.incomes);
	useEffect(() => {
		dispatch(listIncome());
	}, [dispatch]);


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
								<button>
									<Delete />
								</button>
							</IncomeListItemRight>
						</li>
					))
				) : (
					<h2>You have no income yet...</h2>
				)}
			</IncomesListItem>
		</Container>
	);
};
