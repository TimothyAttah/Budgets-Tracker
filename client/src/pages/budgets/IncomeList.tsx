import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIncome, listIncomes } from '../../redux/actions/income';
import { StoreState } from '../../redux/reducers';
import { Button, ButtonGroup } from '@material-ui/core';
import history from '../../history';

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

export const IncomesListItem = styled.ul`
	width: 100%;
	margin-top: 20px;

	li {
		display: flex;
		justify-content: space-between;
		/* background: linear-gradient(to bottom, #3f51b5, #2dc5114a); */
		background: linear-gradient(90deg, rgb(63 81 181 / 50%), white);
		/* background-color: transparent; */
		/* box-shadow: 10px 10px 13px #0002, -10px -10px 13px #fff7; */
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
			font-weight: bolder;
		}
	}
`;

export const IncomeListItemLeft = styled.div`
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
export const IncomeListItemRight = styled.div`
	display: flex;
	justify-content: right;
	button {
		/* background: linear-gradient(to bottom, #b53f3f99, #2dc5114a); */
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

export const IncomeList = () => {
	const dispatch = useDispatch();
	const { incomes } = useSelector((state: StoreState) => state.incomes);
	useEffect(() => {
		dispatch(listIncomes());
	}, [dispatch]);

	const handleDelete = (id: number | string) => {
		dispatch(deleteIncome(id));
	};

	return (
		<Container>
			<h2>Incomes</h2>
			<IncomesListItem>
				{incomes.length ? (
					incomes.map(income => {
						return (
							<li key={income.incomes_id}>
								<IncomeListItemLeft>
									{income.content}: <span>{income.value}</span>
								</IncomeListItemLeft>
								<IncomeListItemRight>
									<ButtonGroup variant='contained'>
										<Link to={`/edit/${income.incomes_id}`}>
											<Button
												onClick={() =>
													history.push(`/edit/${income.incomes_id}`)
												}
											>
												<Edit />
											</Button>
										</Link>
										<Button onClick={() => handleDelete(income.incomes_id)}>
											<Delete />
										</Button>
									</ButtonGroup>
								</IncomeListItemRight>
							</li>
						);
					})
				) : (
					<h3>You have no income yet...</h3>
				)}
			</IncomesListItem>
		</Container>
	);
};
