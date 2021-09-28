import axios from 'axios';
import { ISigninUser } from '../redux/reduxInterface';

const baseURL = 'http://localhost:5000/api/v1';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use(req => {
	if (localStorage.getItem('jwt')) {
		req.headers['Authorization'] = localStorage.getItem('jwt');
	}
	return req;
});

export const signUpUser = (userData: object) =>
	API.post('/auth/signup', userData);

export const signInUser = (userData: ISigninUser) =>
	API.post('/auth/signin', userData);

export const getUsers = () => API.get('/auth');

export const createTodos = (todos: object) => API.post('/todos/create', todos);

export const listsTodos = () => API.get('/todos/auth');

export const listsTodo = (id: object) => API.get(`/todos/auth/${id}`);

export const deleteTodos = (id: number) => API.delete(`/todos/delete/${id}`);

export const editTodos = (id: number, task: string) =>
	API.put(`/todos/update/${id}`, task);

export const listsIncomes = () => API.get('/incomes');

export const createIncomes = (incomes: object) =>
	API.post('/incomes/create', incomes);

export const editIncomes = (id: string, incomes: object) =>
	API.put(`/incomes/edit/${id}`, incomes);

export const deleteIncomes = (id: string) =>
	API.delete(`/incomes/delete/${id}`);

export const listsExpenses = () => API.get('/expenses');

export const createExpenses = (expenses: object) =>
	API.post('/expenses/create', expenses);

export const editExpenses = (id: string, expenses: object) =>
	API.put(`/expenses/edit/${id}`, expenses);

export const deleteExpenses = (id: string) =>
	API.delete(`/expenses/delete/${id}`);
