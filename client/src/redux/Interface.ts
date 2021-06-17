export interface ITodos {
  id: string;
  task: string;
  isComplete: boolean;
  date?: Date | string;
}

export type InitialTodos = {
  todos: ITodos[];
  isLoading: boolean
}

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

export interface ISigninUser {
  id?: string;
  email: string;
  password: string
}

export type InitialUser = {
  users: IUser[];
}

export type DeleteTodos = (id: string) => void;
export type IsCompleteTodos = (todos: ITodos) => void;
export type EditTodos = (id: string, todos: ITodos) => void;
export type Storages = Storage["getItem"];
export type MyRef = {
  className: string | object
}