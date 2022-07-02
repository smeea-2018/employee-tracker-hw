const inquirer = require("inquirer");

const cTable = require("console.table");
//  import questions
const {
  questions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
} = require("./questions");

// get the client
const mysql = require("mysql2");
const initDatabase = require("./db");

require("dotenv").config();

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
        const roles = db.query(
          "SELECT  role.id, role.title, role.salary,department.departmentname FROM `role` INNER JOIN `department` ON role.department_id=department.id"
        );
        console.log(roles);
      } else if (answers.proceed === "view all employees") {
        const employees = db.query(
          "SELECT  employee.id, employee.first_name, employee.last_name,role.title, role.salary, department.departmentname FROM `employee INNER JOIN `role` ON employee.role_id=role.id LEFT JOIN `department` ON role.department_id = department.id"
        );
        //     return results;
        console.log(employees);
      } else if (answers.proceed === "add a department") {
        const departmentAnswers = await inquirer.prompt(departmentQuestions);
        console.log(departmentAnswers);
        addDepartmentQuery = `INSERT INTO department ( departmentname ) VALUES ('${departmentAnswers.departmentName}')`;

        db.query(addDepartmentQuery);

        //const departmentsAdded = db.query("SELECT * FROM `department`");
        //console.log(departmentsAdded);
        console.log("department added");
      } else if (answers.proceed === "add a role") {
        const roleAnswers = await inquirer.prompt(roleQuestions);
        db.query(
          `INSERT INTO role (  title, salary, department_id) VALUES (  '${roleAnswers.roleName}',  '${roleAnswers.roleSalary}', '${roleAnswers.departmentName}')`
        );

        console.log("New role added");
      } else if (answers.proceed === "add an employee") {
        const employeeAnswers = await inquirer.prompt(employeeQuestions);
        db.query(
          `INSERT INTO employee (   first_name,  last_name,  role_id,  manager_id) VALUES (  '${employeeAnswers.employeeFirstName}',  '${employeeAnswers.employeeLastNAme}', '${employeeAnswers.employeeRoleId},'${employeeAnswers.employeeManager}')`
        );
        console.log("Employee added");
      } else if (answers.proceed === "update an employee role") {
        console.log("Please select name of the employee you want to update: ");
        const employeeName = db.query(
          "SELECT first_name, last_name FROM employee"
        );

        console.log(employeeName);
        console.log("Employee role added");
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
