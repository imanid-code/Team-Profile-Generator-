const fs = require("fs");

const inquirer = require("inquirer"); 

const questions = [

    {
        type:"input",
        message:"What is your name?",
        name:"managername"
    },
    {
        type:"input",
        message:"What is your employee ID?",
        name:"managerID"
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"manageremail"
    },
    {
        type:"input",
        message:"What is your office number ?",
        name:"managernumber"
    },

    {
        type:"list",
        message:"Please pick which postition to add from the menu",
        name:"menu",
        choices:["Engineer", "Intern", "Finish Building Team" ]
    },
   

]
//create if statement for list 

function welcome(){
    console.log("Welcome,  Let's Build your team! ")
}

function promptUser(){
    //inquirr.prompt auto takes in questions and prompt user -
    return inquirer.prompt(questions)
}

//await inside asynch , await for this to be completed before moving to next line 

async function prompt(){

    const answers = await promptUser();
    //should i write my if statement here since I am declaring the answers. 
     const filename = team.html;
   // fs.writeFile(filename, data , 'utf8', err =>{
    //     if(err) console.log(err);
    //     else console.log("success!")
    // })
}

welcome();
prompt();
