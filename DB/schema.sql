-- Drop any existing databases and create a new one --
DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;

-- First table for DEPARTMENT --

CREATE TABLE Department(
	Id INT PRIMARY KEY,
    Name VARCHAR(30) UNIQUE NOT NULL
);

-- Second table for ROLE --
CREATE TABLE Role(
	Id INT PRIMARY KEY,
    Title VARCHAR(30),
    Salary DECIMAL,
    Department_Id INT
);

-- Third table for EMPLOYEE --
CREATE TABLE Employee(
	Id INT PRIMARY KEY,
	First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    Role_Id INT,
    Manager_Id INT
);