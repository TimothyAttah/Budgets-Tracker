import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';


const FormContainer = styled.div`
width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
  padding: 20px 0;
	.btn_red {
		background-color: red;
		color: var(--clr-light);
		padding: 11px;
		:hover {
			background-color: red;
			color: var(--clr-light);
			opacity: 0.9;
		}
	}
	.btn_green {
		background-color: green;
		color: var(--clr-light);
		padding: 11px;
		:hover {
			background-color: green;
			color: var(--clr-light);
			opacity: 0.9;
		}
	}
	.red {
		color: red;
	}
	.green {
		color: green;
	}

  @media (max-width: 900px){
    flex-direction: column;
  }
  @media (max-width: 600px){
   .btn_green,
   .btn_red{
    width: 80%;
    margin-top: 20px;
   }
   .btn_green-2,
   .btn_red-2{
    width: 30%;
    margin-top: 15px;
   }
  }
`;
const FormContainerLeft = styled.div`
width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid red; */
  @media (max-width: 900px){
    width: 50%;
    margin: 20px 0;
  }
  @media (max-width: 600px){
    flex-direction: column;
  }
  @media (max-width: 320px){
    width: 70%;
  }
`;
const FormContainerRight = styled.form`
	width: 70%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	label {
		font-weight: 600;
	}
	input {
		padding: 15px;
		border-radius: 5px;
	}
	.income_text {
		width: 50%;
		border: 2px solid green;
	}
	.income_value {
		width: 25%;
		border: 2px solid green;
	}
	.expenses_text {
		width: 50%;
		border: 2px solid red;
	}
	.expenses_value {
		width: 25%;
		border: 2px solid red;
	}
	@media (max-width: 900px) {
		width: 100%;
	}
	@media (max-width: 600px) {
		flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
		.expenses_text,
		.expenses_value,
		.income_text,
		.income_value {
			width: 80%;
		}
		label {
			font-size: 1.5rem;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
		}
		input {
			margin-bottom: 10px;
			font-size: 1.2rem;
		}
	}
`;


export const CreateBudgets = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setClose(false);
  }
  const handleClose = () => {
    setOpen(false);
    setClose(false);
  }
  const toggleOpen = () => {
    setClose(!close);
  }
  return (
		<FormContainer>
			<FormContainerLeft>
				<h4 onClick={toggleOpen}>Choose transaction </h4>
				{close ? (
					<>
						<Button className='btn_green btn_green-2' onClick={handleClose}>
							+
						</Button>
						<Button className='btn_red btn_red-2' onClick={handleOpen}>
							-
						</Button>
					</>
				) : null}
			</FormContainerLeft>
			<FormContainerRight>
				{open ? (
					<>
						<label htmlFor='income' className={open ? 'red' : 'green'}>
							Expenses:
						</label>
						<input
							type='text'
							placeholder='Enter contents...'
							className='expenses_text'
						/>
						<label htmlFor='income' className={open ? 'red' : 'green'}>
							Value:
						</label>
						<input
							type='number'
							placeholder='Enter values...'
							className='expenses_value'
						/>
					</>
				) : (
					<>
						<label htmlFor='income' className={open ? 'red' : 'green'}>
							Income:
						</label>
						<input
							type='text'
							placeholder='Enter contents...'
							className='income_text'
						/>
						<label htmlFor='income' className={open ? 'red' : 'green'}>
							Value:
						</label>
						<input
							type='number'
							placeholder='Enter values...'
							className='income_value'
						/>
					</>
				)}
				<Button className={open ? 'btn_red' : 'btn_green'}>
					{open ? '-' : '+'}
				</Button>
			</FormContainerRight>
		</FormContainer>
	);
}
