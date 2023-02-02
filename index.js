const sql = require("mysql2");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;

const db = sql.createConnection(
    {
      host:  "127.0.0.1",
      user: 'root',
      password: '',
      database: 'departments_db'
    },
    console.log(`Connected to departments_db.`)
  );

function start() {
    inquirer.prompt({
        name: "action",
        type: 'list',
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
        ]
    })
    .then (function (answer) {
        switch (answer.action) {
            case "View All Employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "View All Roles":
                allRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "View All Departments":
                allDepartments();
                break;
            case "Add Department" :
                addDepartment();
                break;
            default:
                console.log("Goodbye!")
        }
    })
};

function viewEmployees() {
    db.query(`SELECT * FROM employee`, (err, data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
        }
    });
    inquirer.prompt ([
        {
            type: "list",
            message: "",
            name: "back",
            choices: ["Back"]
        }
        ]) .then ((ans) => {
            start();
        })
};

function addEmployee() {

    //ans.firstName, ans.lastName, ans.role gives me the results from inquirer
    //take those results and INSERT INTO employees
    

    inquirer.prompt ([
        {
            type: "input",
            message: "Employee first name:",
            name: "firstName"
        },
        {
            type: "input",
            message: "Employee last name:",
            name: "lastName"
        },
        {
            type: "input",
            message: "Employee role (1)=Sales Lead (2)=Salesperson (3)=Lead Engineer (4)=Software Engineer (5)=Account Manager (6)=Accountant (7)=Legal Team Lead (8)=Lawyer:",
            name: "role"
        }
    ]) .then ((ans) => {
        db.query("INSERT INTO employee SET ?",
        {
            first_name: ans.firstName,
            last_name: ans.lastName,
            role_id: ans.role
        },
        function (err) {
            if (err) throw err;
        })
        console.log("Updated")
        inquirer.prompt ([
            {
                type: "list",
                message: "",
                name: "back",
                choices: ["Back"]
            }
            ]) .then ((ans) => {
                start();
            })
    })
};

function removeEmployee () {
    console.log("removeEmployee")
    inquirer.prompt ([
        {
            type: "list",
            message: "",
            name: "back",
            choices: ["Back"]
        }
        ]) .then ((ans) => {
            start();
        })
};

function updateRole() {
    console.log("updateRole")
    inquirer.prompt ([
        {
            type: "list",
            message: "",
            name: "back",
            choices: ["Back"]
        }
        ]) .then ((ans) => {
            start();
        })
};

function allRoles() {
    db.query(`SELECT * FROM roles`, (err, data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
        }
    });
    inquirer.prompt ([
        {
            type: "list",
            message: "",
            name: "back",
            choices: ["Back"]
        }
        ]) .then ((ans) => {
            start();
        })
};

function addRole() {
    inquirer.prompt ([
        {
            type: "input",
            message: "Role title:",
            name: "title"
        },
        {
            type: "input",
            message: "Role salary(no commas):",
            name: "salary"
        },
        {
            type: "list",
            message: "Department ID (1)=Engineering (2)=Finance (3)=Legal (4)=Sales :",
            name: "departmentID",
            choices: [
                "1",
                "2",
                "3",
                "4"
            ]
        }
    ]) .then ((ans) => {
        db.query("INSERT INTO roles SET ?",
        {
            title: ans.title,
            salary: ans.salary,
            department_id: ans.departmentID
        },
        function (err) {
            if (err) throw err;
        })
        console.log("Updated")
        inquirer.prompt ([
            {
                type: "list",
                message: "",
                name: "back",
                choices: ["Back"]
            }
            ]) .then ((ans) => {
                start();
            })
    })
};

function allDepartments() {
    db.query(`SELECT * FROM department`, (err, data) => {
        if (err) {
            throw err
        } else {
            console.table(data);
        }
    });
    inquirer.prompt ([
        {
            type: "list",
            message: "",
            name: "back",
            choices: ["Back"]
        }
        ]) .then ((ans) => {
            start();
        })
};

function addDepartment() {
    inquirer.prompt ([
        {
            type: "input",
            message: "New department name:",
            name: "name"
        }
    ]) .then ((ans) => {
        db.query("INSERT INTO department SET ?",
        {
            name: ans.name,
        },
        function (err) {
            if (err) throw err;
        })
        console.log("Updated")
        inquirer.prompt ([
            {
                type: "list",
                message: "",
                name: "back",
                choices: ["Back"]
            }
            ]) .then ((ans) => {
                start();
            })
    })
};

start();