INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Salesperson", 80000, 4),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 3),
       ("Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Price", 1, 1),
       ("John", "MacTavish", 2, 1),
       ("Simon", "Riley", 4, 1),
       ("Kyle", "Garrick", 8, 1),
       ("Kate", "Laswell", 7, 1),
       ("Alejandro", "Vargas", 5, 1),
       ("Rodolfo", "Parra", 6, 1),
       ("Phillip", "Graves", 3, 1),
       ("Farah", "Karim", 8, 1);