import { Dispatch } from 'redux';
import { ExpensesActionTypes } from '../actionTypes/expensesAction';
import { ExpensesTypes } from '../types';

export const createExpenses = (expenses: object) => async (dispatch: Dispatch) => {
	try {
		dispatch<ExpensesActionTypes>({
			type: ExpensesTypes.CREATE_EXPENSES,
			payload: expenses,
		});
	} catch (err) {
		console.log(err);
	}
};
export const listExpenses = () => async (dispatch: Dispatch) => {
	try {
		dispatch<ExpensesActionTypes>({
			type: ExpensesTypes.LIST_EXPENSES,
		});
	} catch (err) {
		console.log(err);
	}
};
export const updateExpenses =
	(data: object, id: number | string) => async (dispatch: Dispatch) => {
		try {
			dispatch<ExpensesActionTypes>({
				type: ExpensesTypes.UPDATE_EXPENSES,
				payload: { data, id },
			});
		} catch (err) {
			console.log(err);
		}
	};
export const deleteExpenses =
	(id: number | string) => async (dispatch: Dispatch) => {
		try {
			dispatch<ExpensesActionTypes>({
				type: ExpensesTypes.DELETE_EXPENSES,
				payload: id,
			});
		} catch (err) {
			console.log(err);
		}
	};
