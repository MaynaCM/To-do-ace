CREATE DATABASE todoapp;

CREATE TABLE todos (
    id  VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    taskText VARCHAR(255),
    progress INT
);

CREATE TABLE users (

    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
)

INSERT INTO todos(id, user_email, title, tasktext, progress, date)
VALUES(0, 'may@test.com', 'first', 'testeteste', 10)