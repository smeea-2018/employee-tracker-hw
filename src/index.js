const inquirer = require("inquirer");
// const PORT = 3306;
require("dotenv").config();

const cTable = require("console.table");
//  import questions
const {
  questions,
  departmentQuestions,
  employeeQuestions,
  deleteQuestions,
  askRoleQuestions,
  getEmployeeDetails,
} = require("./questions");

const updateEmployees = require("./updateEmployee");

// get the client
const mysql = require("mysql2");
const initDatabase = require("./db");

// const config = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };

// const queryFactory = async () => {
//   //create db connection
//   const db = await mysql.createConnection(config);
//   const getDepartment = async () => {
//     const [results] = await db.query("SELECT * FROM `department`");
//     return results;
//   };

//   const getRole = async () => {
//     const [results] = await db.query("SELECT * FROM `role`");
//     return results;
//   };
//   const getEmployee = async () => {
//     const [results] = await db.query("SELECT * FROM `employee`");
//     return results;
//   };
//   return { getDepartment, getRole, getEmployee };
// };

const init = async () => {
  // const db = await mysql.createConnection(config);
  //const { getDepartment, getRole, getEmployee } = queryFactory();
  // set variable to run the loop

  try {
    const { executeQuery, closeConnection } = await initDatabase({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    let inProgress = true;

    while (inProgress) {
      // get answers for first set of questions
      const answers = await inquirer.prompt(questions);
      //console.log(answers);
      if (answers.proceed === "View all departments") {
        const departments = await executeQuery("SELECT * FROM department");
        console.table(departments);
      } else if (answers.proceed === "view all roles") {
        const roles = await executeQuery(
          "SELECT  role.id, role.title, role.salary,department.departmentname FROM `role` INNER JOIN `department` ON role.department_id=department.id"
        );
        console.table(roles);
      } else if (answers.proceed === "view all employees") {
        const employees = await executeQuery(
          "SELECT  employee.id, employee.first_name, employee.last_name,role.title, role.salary, department.departmentname FROM employee INNER JOIN `role` ON employee.role_id=role.id LEFT JOIN `department` ON role.department_id = department.id LEFT JOIN `employee` ON role.department_id = department.id"
        );
        //     return results;
        console.table(employees);
      } else if (answers.proceed === "add a department") {
        const departmentAnswers = await inquirer.prompt(departmentQuestions);
        console.log(departmentAnswers);
        // addDepartmentQuery = `INSERT INTO department ( departmentname ) VALUES ('${departmentAnswers.departmentName}')`;

        // db.query(addDepartmentQuery);
        const addDepartmentQuery = await executeQuery(
          `INSERT INTO department ( departmentname ) VALUES ('${departmentAnswers.departmentName}')`
        );
        //const departmentsAdded = db.query("SELECT * FROM `department`");
        //console.log(departmentsAdded);
        console.log("department added");
      } else if (answers.proceed === "add a role") {
        const departments = await executeQuery("SELECT * FROM department");
        const roleAnswers = await askRoleQuestions(departments);
        // const roleAnswers = await inquirer.prompt(roleQuestions);
        // const roleAdded = await executeQuery(
        //   `INSERT INTO role (  title, salary, department_id) VALUES (  '${roleAnswers.roleName}',  '${roleAnswers.roleSalary}', '${roleAnswers.departmentName}')`
        // );
        const roleAdded = await executeQuery(
          `INSERT INTO role (title, salary, department_id) VALUES ("${roleAnswers.roleName}", "${roleAnswers.roleSalary}", ${roleAnswers.roleDepartment});`
        );

        console.log("New role added");
      } else if (answers.proceed === "add an employee") {
        const employees = await executeQuery("SELECT * FROM employee");
        const employeeRoles = await executeQuery("SELECT * FROM role");
        const employeeAnswers = await getEmployeeDetails(
          employees,
          employeeRoles
        );
        const addEmployee = await executeQuery(
          `INSERT INTO employee (   first_name,  last_name,role_id, manager_id) VALUES (  '${employeeAnswers.employeeFirstName}',  '${employeeAnswers.employeeLastName}', '${employeeAnswers.employeeRoleId}', '${employeeAnswers.manager};')`
        );
        console.log("Employee added");
      } else if (answers.proceed === "update an employee role") {
        //     console.log("Please select name of the employee you want to update: ");
        //     const employeeName =
        //       await executeQuery(`SELECT e.id, CONCAT(e.first_name,' ', e.last_name) AS employee, r.salary, r.title,
        //      d.departmentname, CONCAT(m.first_name,' ',  m.last_name) AS manager FROM employee AS e LEFT JOIN employee AS m
        // ON e.manager_id = m.id INNER JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id
        // ORDER BY e.id;`);
        //     // "SELECT id,   CONCAT(first_name,' ', last_name) as employee_name, role.id, manager_id FROM employee"

        //     const updateEmployees = (employeeName) => {
        //       return employeeName.map((ename) => ({
        //         name: ename.employee,
        //         value: ename.id,
        //       }));
        //     };
        //     console.log(employeeName);
        //     const selectedEmployee = await inquirer.prompt([
        //       {
        //         name: "employee",
        //         type: "list",
        //         message: "Please select employee?",
        //         choices: updateEmployees(employeeName),
        //       },
        //     ]);
        updateEmployees();
        console.log("Employee role added");
      } else if (answers.proceed === "delete a department") {
        const deleteDepartmentAnswers = await inquirer.prompt(deleteQuestions);
        const deleteDepartment = await executeQuery(
          `DELETE FROM department where id = '${deleteDepartmentAnswers.deleteDepartmentId}'`
        );
      } else {
        inProgress = false;
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Internal error | ${error.message}`);
  }
};

//  start your application
init();
