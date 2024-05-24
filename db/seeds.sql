INSERT INTO department (id, name)
VALUES (1, "Sales"),
    (2,"Engineering"),
    (3, "Finance"),
    (4, "Legal");
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 75000, 2),
    ("Account Manager", 80000, 3),
    ("Accountant", 65000, 3),
    ("Lawyer", 50000, 4),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Legal Team Lead", 250000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
    ("Jane", "Doe", 2, 1),
    ("Bob", "Doe", 3, 2),
    ("Sally", "Doe", 4, 3);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
