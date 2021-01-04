-- Drop any existing databases and create a new one --
DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;

-- First table for DEPARTMENT --

CREATE TABLE Department(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30) UNIQUE NOT NULL
);

-- Second table for ROLE --
CREATE TABLE Role(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(30),
    Salary DECIMAL,
    Department_Id INT
);

-- Third table for EMPLOYEE --
CREATE TABLE Employee(
	Id INT AUTO_INCREMENT PRIMARY KEY,
	First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    Role_Id INT,
    Manager_Id INT
);

-- First table for DEPARTMENT --
-- USE management_db;

INSERT INTO Department(Name)

VALUES('Management'),('Sales'),('Accounting'),('Engineering');

-- Second table for ROLE --

INSERT INTO Role(Title, Salary, Department_id)

VALUES('Manager', 100000, 001),
('Supervisor', 84000, 001),
('Sales Lead', 78000, 002),
('Salesperson', 65000, 002),
('Accountant', 82000, 003),
('Receiving/Billing', 65000, 003),
('Chief Engineer', 80000, 004),
('Junior Engineer', 68000, 004);

-- Third table for EMPLOYEE --

INSERT INTO Employee(First_name, Last_name, Role_Id, Manager_Id)

VALUES ('El', 'Jefe', 001, null),
('Egg', 'Yolk', 001, 1),
('Egg', 'White', 001, 1),
('Money', 'Maker', 002, 1),
('One', 'Dollar', 002, 2);