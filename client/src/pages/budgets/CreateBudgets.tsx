import React, { FormEvent, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createIncome } from '../../redux/actions/income';
import { createExpenses } from '../../redux/actions/expenses';

import {
	FormContainer,
	FormContainerLeft,
	FormContainerRight,
	FormContainerPrimary
} from './CreateBudgetStyle';
import { v4 } from 'uuid';
import {  AddCircle, ArrowDropDown, Check,  RemoveCircle } from '@material-ui/icons';

export const CreateBudgets = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [close, setClose] = useState(false);

	const [content, setContent] = useState('');
	const [value, setValue] = useState('');

	const handleOpen = () => {
		setOpen(true);
		setClose(false);
	};
	const handleClose = () => {
		setOpen(false);
		setClose(false);
	};
	const toggleOpen = () => {
		setClose(!close);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newBudget = {
			id: v4(),
			content,
			value: parseInt(value),
		};

		if (open) {
			if (content !== '' && value !== '') {
				dispatch(createExpenses(newBudget));
				setContent('');
				setValue('');
			}
		} else {
			if (content !== '' && value !== '') {
				dispatch(createIncome(newBudget));
				setContent('');
				setValue('');
			}
		}
	};


	return (
		<FormContainer>
			<FormContainerPrimary>
			<FormContainerLeft>
				<h4 onClick={toggleOpen}>
					{' '}
					<ArrowDropDown />{' '}
				</h4>
				{close ? (
					<>
						<AddCircle
							// className='btn_green btn_green-2'
							onClick={handleClose}
						/>
						<RemoveCircle
							// className='btn_red btn_red-2'
							onClick={handleOpen}
						/>
					</>
				) : null}
			</FormContainerLeft>
			<FormContainerRight onSubmit={handleSubmit}>
				{open ? (
					<>
						<label htmlFor='income' className={open ? 'red' : 'green'}></label>
						<input
							type='text'
							placeholder='Add description'
							className='expenses_text'
							value={content}
							onChange={e => setContent(e.target.value)}
						/>
						<label htmlFor='income' className={open ? 'red' : 'green'}></label>
						<input
							type='number'
							placeholder='Value'
							className='expenses_value'
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
					</>
				) : (
					<>
						<label htmlFor='income' className={open ? 'red' : 'green'}></label>
						<input
							type='text'
							placeholder='Add description'
							className='income_text'
							value={content}
							onChange={e => setContent(e.target.value)}
						/>
						<label htmlFor='income' className={open ? 'red' : 'green'}></label>
						<input
							type='number'
							placeholder='Value'
							className='income_value'
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
					</>
				)}
				<Button type='submit' className={open ? 'btn_red' : 'btn_green'}>
					{/* {open ? } */}
					<Check />
				</Button>
			</FormContainerRight>
			</FormContainerPrimary>
		</FormContainer>
	);
};
