import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listIncome } from '../../redux/actions/income';
import { StoreState } from '../../redux/reducers';

export const Container = styled.div`
	width: 50%;
`;

export const IncomeList = () => {
  const dispatch = useDispatch();
  const {incomes} = useSelector((state: StoreState) => state.incomes);
  useEffect(() => {
    dispatch(listIncome());
  }, [dispatch]);

  console.log(incomes);
  
  return (
    <Container>
      <h2>Incomes</h2>
      {incomes.length ? (
        incomes.map(income => (
          <ul key={income.id}>
            <li>{income.content} <span>{income.value}</span></li>
         </ul>
       ))
      ): (
          <h2>You have no income yet...</h2>
      )}
    </Container>
  )
}
