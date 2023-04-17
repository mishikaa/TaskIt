-- Creating a database 
CREATE DATABASE taskItdb; 

-- Creating a table to store the todos
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, -- SERIAL increases the primary key value so that it remains unique
    username VARCHAR(20),
    password VARCHAR(100),
    description VARCHAR(255),
    iscomplete BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT NOW() :: TIMESTAMP(0)
);

