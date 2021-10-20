import { IncomeTypes } from "../types";
import { IncomeActionTypes } from "../actionTypes/incomeAction";
import { Incomes } from "../reduxInterface";

const initialState: Incomes = {
  incomes: [
    {
      id: 1,
      content: 'salary',
      value: 8000,
      createdAt: '12th june 2021'
    },
    {
      id: 2,
      content: 'Projects',
      value: 5000,
      createdAt: '12th june 2021'
    },
    {
      id: 3,
      content: 'Todos',
      value: 2000,
      createdAt: '12th june 2021'
    },
    {
      id: 4,
      content: 'Cleaning Jobs jbhhghhg fitdrtud',
      value: 7000,
      createdAt: '12th june 2021'
    },
  ]
}

export const incomes = (state = initialState, action: IncomeActionTypes) => {
  switch (action.type) {
    case IncomeTypes.CREATE_INCOME:
      return {
        ...state,
        incomes: [action.payload, ...state.incomes]
      }
    case IncomeTypes.LIST_INCOME:
      return {
        ...state,
      }
    case IncomeTypes.UPDATE_INCOME:
      return {
        ...state,
        incomes: state.incomes.map(income => income.id === action.payload.id ? action.payload : income)
      }
    case IncomeTypes.DELETE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter(income => income.id !== action.payload)
      }
    default:
      return state;
  }
};
