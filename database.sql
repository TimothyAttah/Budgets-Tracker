CREATE DATABASE budgetary;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  userId uuid DEFAULT uuid_generate_v4(),
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(userId),
  CreatedAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE incomes(
  incomesId SERIAL,
  userId UUID,
  content VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  PRIMARY KEY(incomesId),
  FOREIGN KEY (userId) REFERENCES users(userId),
  CreatedAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses(
  expensesId SERIAL,
  userId UUID,
  content VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  PRIMARY KEY(expensesId),
  FOREIGN KEY (userId) REFERENCES users(userId),
  CreatedAt TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(firstName, lastName, email, password) 
VALUES ('Jane', 'Doe', 'jane@gmail.com', '123456');