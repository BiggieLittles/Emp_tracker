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
