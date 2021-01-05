////TO RUN APPLICATION RUN SERVER.JS////

////-DEPENDENCIES-////
const inquirer = require('inquirer');
const asciiArt = require('asciiart-logo');
const consoleTable = require('console.table');
const DB = require('./DB');
const connection = require('./server');

////-APPLICATION FUNCTIONALITY-////



////-START MENU-////
const start = () => {

    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to perform:',
        choices: [
            'Add Departments, Roles or Employees',
            'View Departments, Roles or Employees',
            'Update Employee Roles',
            'Exit'
        ]
    })
    .then((answer) => {
        switch (answer.action) {
          case 'Add Departments, Roles or Employees':
            add();
            break;
  
          case 'View Deparments, Roles or Employees':
            view();
            break;

          case 'Update Employee Roles':
              updateRole();
              break;
  
          case 'Exit':
            connection.end();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
    });
    };

////-VIEW DEPARTMENTS, EMPLOYEES AND ROLES-////
const view = () => {

  inquirer.prompt({
    name:'table',
    type: 'rawlist',
    message: 'What would you like to view:',
    choices: ['View Departments','View Employees','View Roles', 'Exit']
  })
  .then((answer) => {
    switch(answer.table) {
      //CASE VIEW DEPARTMENTS
      case 'View Departments':
        let DepartmentList = 'SELECT * FROM management_db.Department';
        connection.query(DepartmentList, (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        });
        break;
        // CASE VIEW EMPLOYEES
        case 'View Employees':
          let employeeList = 'SELECT * FROM management_db.Employee';
          connection.query(employeeList, (err, res) => {
            if (err) throw err;
            console.table(res);
            start();
          });
          break;
          //CASE VIEW ROLES
          case 'View Roles':
            let roleList = 'SELECT * FROM management_db.Role';
            connection.query(roleList, (err, res) => {
              if (err) throw err;
              console.table(res);
              start();
            });
            break;
            //////////////////////////
            case 'Exit':
              connection.end();
              break;
    
            default:
              console.log(`Invalid action: ${answer.action}`);
              break;
    }
  });
};

// // ADD DEPARTMENTS EMPLOYEES AND ROLES
// const add = () => {
//   inquirer.prompt({
//     name: 'add',
//     type: 'list',
//     message: 'What would you like to add:',
//     choices: ['Add Department', 'Add Employee', 'Add Role','Exit']
// })
// .then((answer) => {
//   switch(answer.add) {
//     //ADD DEPARTMENT
//     case 'Add Department':
//       addDepartment();
//     break;
//     //ADD EMPLOYEE
//     case 'Add Employee':
//       addEmployee();
//     break;
//     //ADD ROLE
//     case 'Add Role':
//       addRole();
//     break;
//     //EXIT
//     case 'Exit':
//       start();
//     break;
//   }
// })
// };


// ////-ADD FUNCTIONS-////

// //ADD DEPARTMENT 
// const addDepartment = () => {
//   inquirer.prompt([
//     {
//       name: 'department',
//       type: 'input',
//       message: 'What Department would you like to add:'
//     }
//   ])
//   .then((answer) => {
//     connection.query('INSERT INTO Department SET ?',
//     {
//       name: answer.department
//     },
//     (err) => {
//       if (err) throw err;
//       console.log('Your Department was created successfully!');
//       start();
//     }
//     );
//   });
// };
// //ADD EMPLOYEE
// const addEmployee = () => {
//   inquirer.prompt([
//     {
//       name: 'firstName',
//       type: 'input',
//       message: 'Please enter a first name:'
//     },
//   {
//       name: 'lastName',
//       type: 'input',
//       message: 'Please enter a last name:'
//   },
//   {
//     name: 'roleId',
//     type: 'input',
//     message: 'Enter a role ID:'
//   },
//   {
//     name: 'managerId',
//     type: 'input',
//     message: 'Enter employees Manager Id:'
//   }
//   ])
//   .then((answer) => {
//     connection.query('INSERT INTO Employee SET ?',
//     {
//       First_name: answer.firstName,
//       Last_name: answer.lastName,
//       Role_Id: answer.roleId,
//       Manager_Id: answer.ManagerId,
//     },
//     (err) => {
//       if (err) throw err;
//       console.log('This Employee was added successfully!');
//       start();
//     }
//     );
//   });
// };
// //ADD ROLE
// const addRole = () => {
//   inquirer.prompt([
//     {
//       name: 'title',
//       type: 'input',
//       message: 'Please enter a title:'
//     },
//   {
//       name: 'salary',
//       type: 'input',
//       message: 'Please enter a salary:'
//   },
//   {
//     name: 'departmentId',
//     type: 'input',
//     message: 'Enter a Department ID:'
//   },
//   ])
//   .then((answer) => {
//     connection.query('INSERT INTO Role SET ?',
//     {
//       Title: answer.title,
//       Salary: answer.salary,
//       Department_Id: answer.departmentId,
//     },
//     (err) => {
//       if (err) throw err;
//       console.log('This Role was created successfully!');
//       start();
//     }
//     );
//   });
// }

////-UPDATE EMPLOYEE ROLES-////
const updateRole = () => {
  inquirer.prompt ([
    {
    name: 'idUpdate',
    type: 'input',
    message: 'Please enter the employee ID to update role:',
    },
    {
      name: 'roleUpdate',
      type: 'input',
      message: 'Please enter the new role ID:'
    }
  ])
  .then((answer) => {
    connection.query(
      'UPDATE Employee SET Role_Id = ? WHERE Id = ?',
      [answer.roleUpdate, answer.idUpdate],
      function (error, res) {
        if (err) throw err;
        console.log('Updated role');
      }
    );
    start();
  });
};
module.exports = start()