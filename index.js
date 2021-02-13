const fs = require("fs");

const inquirer = require("inquirer");

const path = require("path");

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern")

const render = require("./dist/renderhtml");

const listofEmployee = [];

const managerquestions = [

    {
        type: "input",
        message: "What is your name?",
        name: "managername"
    },
    {
        type: "input",
        message: "What is your employee ID?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "manageremail"
    },
    {
        type: "input",
        message: "What is your office number ?",
        name: "managernumber"
    },


]
const engineerquestions = [
    {
        type: "input",
        message: "Please enter engineer name: ",
        name: "engineerename"
    },
    {
        type: "input",
        message: "Please enter engineer ID number:  ",
        name: "engineerID"
    },
    {
        type: "input",
        message: "Please enter engineer e-mail address: ",
        name: "engineeremail"
    },
    {
        type: "input",
        message: "Please enter engineer github name: ",
        name: "engineergithub"
    },
]

const internquestions = [
    {
        type: "input",
        message: "Please enter intern name: ",
        name: "internname"
    },
    {
        type: "input",
        message: "Please enter intern ID: ",
        name: "internID"
    },
    {
        type: "input",
        message: "Please enter intern email: ",
        name: "internemail"
    },
    {
        type: "input",
        message: "Please enter intern school: ",
        name: "internschool"
    },
]


function welcome() {
    console.log("Welcome,  Let's Build your team! ")
}

function promptUser() {
    //inquirr.prompt auto takes in questions and prompt user -
    return inquirer.prompt(managerquestions).then(function (response) {

        if (response.managername === true) {
            const newManager = new Manager(response.managername, response.managerID, response.manageremail, response.managernumber);
            listofEmployee.push(newManager);
        }

        createNewEmployee();

    });
    function promptNewEmployee() {
        inquirer.prompt([
            {
                type: "list",
                message: "Please pick which postition to add from the menu",
                name: "role",
                choices: ["Engineer", "Intern"]
            }
        ]).then(function (response) {

            if (response.role === "Engineer") {
                inquirer.prompt(engineerquestions).then(function(response){

                

                const newEngineer = new Engineer(response.engineername, response.engineerID, response.engineeremail, response.engineergithub);
                listofEmployee.push(newEngineer);
                createNewEmployee();
            })
            }

            else if (response.role === "Intern") {
                inquirer.prompt(internquestions).then(function(response){

                
                const newIntern = new Intern(response.internname, response.internID, response.internemail, response.internschool);
                listofEmployee.push(newIntern);
                createNewEmployee();
            })
            }
            
        })
       
    }
    function createNewEmployee() {
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to enter another employee?",
                name: "addNew",



            }
        ]).then(function (answers) {
            if (answers.addNew) {
                promptNewEmployee();
            }
            else {
                console.log(listofEmployee)
                const html = render(listofEmployee);
                fs.writeFile("team.html", html,
                 function (err) {

                    if (err) throw err;
                }); 
            }
        }
        )
    }


}
welcome();
promptUser();
