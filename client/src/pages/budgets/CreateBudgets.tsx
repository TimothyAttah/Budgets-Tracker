import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { FormContainer, FormContainerLeft, FormContainerRight } from './CreateBudgetStyle';


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
