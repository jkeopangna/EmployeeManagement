-- Drop any existing databases and create a new one --
DROP DATABASE IF EXISTS managementDB;
CREATE DATABASE managementDB;

-- First table for DEPARTMENT --
USE managementDB;
CREATE TABLE Department(
	Id INT PRIMARY KEY,
    Name VARCHAR(30) UNIQUE NOT NULL
);

-- Second table for ROLE --
CREATE TABLE role(
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