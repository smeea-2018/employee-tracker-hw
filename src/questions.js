const inquirer = require("inquirer");
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
      "delete a department",
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

const departmentList = (departments) => {
  return departments.map((department) => ({
    name: department.departmentname,
    value: department.id,
  }));
};

const askRoleQuestions = async (departments) => {
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
    // {
    //   type: "input",
    //   name: "departmentID",
    //   message: "Please enter department ID",
    // },

    {
      type: "list",
      name: "roleDepartment",
      message: "Which department does the role belong to?",
      choices: departmentList(departments),
    },
  ];

  const roleAnswers = await inquirer.prompt(roleQuestions);
  return roleAnswers;
};

const managerList = (managers) => {
  return managers.map((manager) => ({
    name: `${manager.first_name} ${manager.last_name}`,
    value: manager.id,
  }));
};

const roleList = (employeeRoles) => {
  return employeeRoles.map((employeeRole) => ({
    name: employeeRole.title,
    value: employeeRole.id,
  }));
};
const getEmployeeDetails = async (employees, employeeRoles) => {
  const employeeQuestions = [
    {
      type: "input",
      name: "employeeFirstName",
      message: "Please enter first name of the employee",
    },
    {
      type: "input",
      name: "employeeLastName",
      message: "Please enter last name of the employee",
    },

    {
      type: "list",
      name: "manager",
      message: "Please enter manager name",
      choices: managerList(employees),
    },
    {
      type: "list",
      name: "employeeRoleId",
      message: "Please enter role of the employee",
      choices: roleList(employeeRoles),
    },
  ];

  const employeeAnswers = await inquirer.prompt(employeeQuestions);
  return employeeAnswers;
};

const UpdateEmployeeQuestions = [
  {
    type: "input",
    name: "employeeName",
    message: "Please enter first name of the employee",
  },
];

const deleteQuestions = [
  {
    type: "input",
    name: "deleteDepartmentId",
    message: "Please enter id of the department you want to delete",
  },
];
module.exports = {
  questions,
  departmentQuestions,
  deleteQuestions,
  askRoleQuestions,
  getEmployeeDetails,
};
