// // const mysql = require("mysql2");
// // const initDatabase2 = require("./db");
// // const cTable = require("console.table");
// const inquirer = require("inquirer");

// const cTable = require("console.table");

// require("dotenv").config();
// const {
//   questions,
//   departmentQuestions,
//   roleQuestions,
//   employeeQuestions,
//   deleteQuestions,
// } = require("./questions");

// // get the client
// const mysql = require("mysql2");
// const initDatabase = require("./db");

// require("dotenv").config();

// const updateEmployee = async (employeeName, rolesToAdd) => {
//   // const { executeQuery, closeConnection } = await initDatabase({
//   //   host: process.env.DB_HOST,
//   //   user: process.env.DB_USER,
//   //   password: process.env.DB_PASSWORD,
//   //   database: process.env.DB_NAME,
//   // });
//   // const employeeName =
//   //   await executeQuery(`SELECT e.id, CONCAT(e.first_name,' ', e.last_name) AS employee, r.salary, r.title,
//   //        d.departmentname, CONCAT(m.first_name,' ',  m.last_name) AS manager FROM employee AS e LEFT JOIN employee AS m
//   //   ON e.manager_id = m.id INNER JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id
//   //   ORDER BY e.id;`);
//   // "SELECT id,   CONCAT(first_name,' ', last_name) as employee_name, role.id, manager_id FROM employee"

//   const employee = (employeeName) => {
//     return employeeName.map((ename) => ({
//       name: ename.employee,
//       value: ename.id,
//     }));
//   };
//   console.log(employeeName);
//   // const selectedEmployee = await inquirer.prompt([
//   //   {
//   //     name: "employee",
//   //     type: "list",
//   //     message: "Please select employee?",
//   //     choices: updateEmployee(employeeName),
//   //   },
//   // ]);

//   // const rolesToAdd = await executeQuery(
//   //   `SELECT role.id, role.title AS role,role.salary,department.departmentname AS department FROM role INNER JOIN department ON department.id=role.department_id ORDER BY department;`
//   // );

//   console.log(rolesToAdd);

//   const updateRoles = (rolesToAdd) => {
//     return rolesToAdd.map((role) => ({
//       name: role.title,
//       value: role.id,
//     }));
//   };
//   //   console.log(employeeName);
//   const selectedRoles = await inquirer.prompt([
//     {
//       name: "role",
//       type: "list",
//       message: "Please select role",
//       choices: updateRoles(rolesToAdd),
//     },
//   ]);
//   console.log(selectedRoles);
//   console.log("Employee role added");
//   const updatedEmployeeRole = await executeQuery(
//     `UPDATE employee SET role_id = '${role.role}' WHERE id = ${employee.employee};`
//   );
//   console.log(employeeName.employee);
//   const updatedTableEmployee = await executeQuery(`select * from employee;`);
//   console.table(updatedTableEmployee);
// };

// module.exports = updateEmployee;
