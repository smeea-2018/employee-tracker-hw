const questions = [
  {
    type: "list",
    name: "proceed",
    message: " What would you like to do next:",
    choices: [
      "View all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
      "Quit",
    ],
  },
];

const departmentQuestions = [
  {
    type: "input",
    name: "departmentName",
    message: "Please enter name of the department",
  },
];

const roleQuestions = [
  {
    type: "input",
    name: "roleName",
    message: "Please enter title of the role",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "Please enter salary for the role",
  },
  {
    type: "input",
    name: "departmentName",
    message: "Please enter department",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "employeeFirstName",
    message: "Please enter first name of the employee",
  },
  {
    type: "input",
    name: "employeeLastNAme",
    message: "Please enter last name of the employee",
  },
  {
    type: "input",
    name: "employeeRoleId",
    message: "Please enter role of the employee",
  },
  {
    type: "input",
    name: "",
    message: "Please enter manager name",
  },
];

const UpdateEmployeeQuestions = [
  {
    type: "input",
    name: "employeeName",
    message: "Please enter first name of the employee",
  },
];

module.exports = {
  questions,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
};
