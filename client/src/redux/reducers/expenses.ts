import { ExpensesTypes } from '../types';
import { ExpensesActionTypes } from '../actionTypes/expensesAction';
import { Expenses } from '../reduxInterface';

const initialState: Expenses = {
	expenses: [
		// {
		// 	expenses_id: 2,
		// 	content: 'Groceries',
		// 	value: 8000,
		// 	createdAt: '18th May 2021',
		// },
		// {
		// 	expenses_id: 3,
		// 	content: 'Bought house',
		// 	value: 5000,
		// 	createdAt: '18th May 2021',
		// },
		// {
		// 	expenses_id: 4,
		// 	content: 'Bought milk',
		// 	value: 2000,
		// 	createdAt: '18th May 2021',
		// },
	],
};


export const expenses = (state = initialState, action: ExpensesActionTypes) => {
	switch (action.type) {
		case ExpensesTypes.CREATE_EXPENSES:
			return {
				...state,
				expenses: [action.payload, ...state.expenses],
			};
		case ExpensesTypes.LIST_EXPENSES:
			case ExpensesTypes.LIST_EXPENSE:
			return {
				...state,
				expenses: action.payload
			};
		case ExpensesTypes.UPDATE_EXPENSES:
			return {
				...state,
				expenses: state.expenses.map(expense =>
					expense.expenses_id === action.payload.id ? action.payload : expense
				),
			};
		case ExpensesTypes.DELETE_EXPENSES:
			return {
				...state,
				expenses: state.expenses.filter(expense => expense.expenses_id !== action.payload),
			};
		default:
			return state;
	}
};
