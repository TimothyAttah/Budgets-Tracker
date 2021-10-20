import { Dispatch } from "redux";
import { IncomeActionTypes } from "../actionTypes/incomeAction";
import { IncomeTypes } from "../types";

export const createIncome = (income: object) => async (dispatch: Dispatch) => {
  try {
    dispatch<IncomeActionTypes>({
      type: IncomeTypes.CREATE_INCOME,
      payload: income
    })
  } catch (err) {
    console.log(err);
  }
}
export const listIncome = () => async (dispatch: Dispatch) => {
  try {
    dispatch<IncomeActionTypes>({
      type: IncomeTypes.LIST_INCOME,
    })
  } catch (err) {
    console.log(err);
  }
}
export const updateIncome = (data: object, id: number | string) => async (dispatch: Dispatch) => {
  try {
    dispatch<IncomeActionTypes>({
      type: IncomeTypes.UPDATE_INCOME,
      payload: {data, id}
    })
  } catch (err) {
    console.log(err);
  }
}
export const deleteIncome = (id: number | string) => async (dispatch: Dispatch) => {
  try {
    dispatch<IncomeActionTypes>({
      type: IncomeTypes.DELETE_INCOME,
      payload: id
    })
  } catch (err) {
    console.log(err);
  }
}
