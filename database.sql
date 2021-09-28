CREATE DATABASE budgetary;

CREATE TABLE users(
  userId uuid DEFAULT uuid_generate_v4(),
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(userId)
);

CREATE TABLE incomes(
  incomeId SERIAL,
  userId UUID,
  content VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  PRIMARY KEY(incomeId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE expenses(
  expensesId SERIAL,
  userId UUID,
  content VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  PRIMARY KEY(expensesId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);