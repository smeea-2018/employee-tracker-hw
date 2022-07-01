const inquirer = require("inquirer");
//  import questions
const { questions } = require("./questions");

// get the client
const mysql = require("mysql2");

require("dotenv").config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

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
  const db = await mysql.createConnection(config);
  //const { getDepartment, getRole, getEmployee } = queryFactory();
  // set variable to run the loop
  let inProgress = true;

  while (inProgress) {
    // get answers for first set of questions
    const answers = await inquirer.prompt(questions);
    //console.log(answers);
    if (answers.proceed === "View all departments") {
      //const departments = getDepartment();
      const departments = await db.query("SELECT * FROM `department`");
      console.log(departments);
    }
    if (answers.proceed === "view all roles") {
      const roles = await db.query("SELECT * FROM `role`");
      console.log(roles);
    }
    if (answers.proceed === "view all employees") {
      const employees = await db.query("SELECT * FROM `employee`");
      //     return results;
      console.log(employees);
    }
    if (answers.proceed === "add a department") {
      console.log("department addes");
    }
    if (answers.proceed === "add a role") {
      console.log("New role added");
    }
    if (answers.proceed === "add an employee") {
      console.log("Employee added");
    }
    if (answers.proceed === "Update an employee role") {
      console.log("Employee role added");
    } else {
      inProgress = false;
    }
  }
};

//  start your application
init();
