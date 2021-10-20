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
	h2 {
		color: #008074;
		font-size: 1.5rem;
		font-weight:200;
	}
	/* @media (max-width: 450px) {
		width: 48%;
		h2 {
			font-size: 1.5rem;
		}
	} */
`;

export const IncomesListItem = styled.ul`
	width: 100%;
	margin-top: 20px;

	li {
		display: flex;
		align-items: flex-end;
		position: relative;
		box-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
		color: #3c3030b5;
		text-transform: capitalize;
		margin-bottom: 15px;
		font-size: 1.2rem;
		padding: 15px 10px;
		border-radius: 5px;
		font-weight: 600;
		:nth-of-type(even) {
			background-color: #80808038;
		}
		:hover {
			opacity: 0.8;
		}
		span {
			color: #008074;
		}
		@media (max-width: 900px) {
			flex-direction: column;
			height: 130px;
		}
		@media (max-width: 600px) {
			flex-direction: column;
			height: 140px;
		}
		@media (max-width: 360px) {
			height: 120px;
			font-size: 1rem;
			font-weight: bold;
		}
	}
`;

export const IncomeListItemLeft = styled.div`
	width: 75%;
	display: flex;
	justify-content: space-between;

	span {
		/* position: absolute; */
		color: #008074;
		/* right: 150px; */
	}
	@media (max-width: 1290px) {
		p {
			width: 220px;
		}
	}
	@media (max-width: 1135px) {
		p {
			width: 150px;
		}
	}
	@media (max-width: 900px) {
		width: 100%;
		flex-direction: column;
		padding-bottom: 15px;
		p {
			width: 100%;
		}
		.span__container {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			padding-top: 10px;
		}
	}
`;
export const IncomeListItemRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 10px;
	top: 10px;
	.MuiButtonGroup-contained {
		box-shadow: none;
	}
	.MuiButton-root {
		padding: 5px;
		min-width: 0;
	}
	button {
		background-color: #e5e5e5;
		color: #008074;
		.MuiSvgIcon-root {
			font-size: 20px;
		}
	}
	@media (max-width: 900px) {
		top: 90px;
	}
	@media (max-width: 600px) {
		top: 100px;
	}
	@media (max-width: 360px) {
		top: 80px;
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
									<p>{income.content}</p>
									<div className='span__container'>
										<span>
											+
											{income.value
												.toFixed(2)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										</span>
									</div>
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
