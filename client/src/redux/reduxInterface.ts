export interface IUser {
	id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface ISigninUser {
	id?: string;
	email: string;
	password: string;
}

export type InitialUser = {
	users: IUser[];
};

interface IncomeLists {
	id: number | string;
	content: string;
	value: number;
	createdAt?: Date | string;
}

export type Incomes = {
	incomes: IncomeLists[];
};
interface ExpensesLists {
	id: number | string;
	content: string;
	value: number;
	createdAt?: Date | string;
}

export type Expenses = {
	expenses: ExpensesLists[];
};
