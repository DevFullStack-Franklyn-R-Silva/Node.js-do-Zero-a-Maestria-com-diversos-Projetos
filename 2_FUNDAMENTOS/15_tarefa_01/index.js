// npm init
// npm install chalk@4.1.2
// npm install inquirer@8.1.0

const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
    .prompt([
        {
            name: "p1",
            message: "Qual seu nome?",
        },
        {
            name: "p2",
            message: "Qual sua idade?",
        },
    ])
    .then((answers) => {
        console.log(chalk.bgYellow.black.bold("Nome: " + answers.p1));
        console.log(chalk.bgGreen.black("Idade: " + answers.p2));
    })
    .catch((err) => {
        console.log(err);
    });
