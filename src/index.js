const inquirer = require("inquirer");
// // // import questions
const { questions } = require("./questions");

// require("dotenve").config();

// const config = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// };

// const db = mysql.createconnection(config);
// require("dotenv").config();

const init = async () => {
  // set variable to run the loop
  let inProgress = true;
  while (inProgress) {
    // get answers for first set of questions
    const answers = await inquirer.prompt(questions);
    console.log(questions);
    if (answers.proceed === "View all departments") {
      console.log("department");
    }
    if (answers.proceed === "view all roles") {
      console.log("roles");
    }
    if (answers.proceed === "view all employees") {
      console.log("employees");
    } else {
      inProgress = false;
    }
  }
};

//  start your application
init();
