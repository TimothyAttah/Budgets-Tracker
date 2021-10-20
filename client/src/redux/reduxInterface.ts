interface IncomeLists {
	id: number | string;
	content: string;
	value: number;
	createdAt?: Date | string;
}

export type Incomes = {
  incomes: IncomeLists[]
}
interface ExpensesLists {
	id: number | string;
	content: string;
	value: number;
	createdAt?: Date | string;
}

export type Expenses = {
  expenses: ExpensesLists[]
}