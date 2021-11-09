CREATE DATABASE budgetary;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id),
  created_At TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE incomes(
  incomes_id uuid DEFAULT uuid_generate_v4(),
  user_id UUID,
  content VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  PRIMARY KEY(incomes_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  created_At TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses(
  expenses_id uuid DEFAULT uuid_generate_v4(),
  user_id UUID,
  content VARCHAR(255) NOT NULL,
  value INTEGER NOT NULL,
  PRIMARY KEY(expenses_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  created_At TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(firstName, lastName, email, password) 
VALUES ('Jane', 'Doe', 'jane@gmail.com', '123456');