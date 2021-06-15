CREATE DATABASE note3sixty;

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users(first_name, last_name, user_email, user_password) VALUES ('Jane', 'Doe', 'jane@gmail.com', '123456');