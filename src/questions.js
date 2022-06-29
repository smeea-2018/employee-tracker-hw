const questions = [
  {
    type: "list",
    name: "proceed",
    message: " What would you like to do next:",
    choices: [
      "View all departments",
      "view all roles",
      "view all employees",
      "Quit",
    ],
  },
];
// const questions1 = [
//   {
//     type: "input",
//     name: "viewDepartment",
//     message: "view all departments",
//   },

//   {
//     type: "input",
//     name: "viewRoles",
//     message: "view all roles",
//   },

//   {
//     type: "input",
//     name: "viewEmployees",
//     message: "view all employees",
//   },
//   //   {
//   //     type: "input",
//   //     name: "viewEmployees",
//   //     message: "view all employees",
//   //   },
// ];

module.exports = { questions };
