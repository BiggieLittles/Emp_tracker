const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "business_db",
});
 const displayDept = () => {
  db.promise()
  .query(`SELECT * FROM department`)
  .then((data) => {
    console.table(data[0]);
  });
}

displayDept();

inquirer
  .prompt([
    {
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then((answer) => {
    switch (answer.menu) {
      case "View all departments":
        displayDept();
        break;
    } 
  })
  .catch((err) => {
    console.log(err);
  })

  