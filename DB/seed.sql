-- First table for DEPARTMENT --
USE management_db;

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
