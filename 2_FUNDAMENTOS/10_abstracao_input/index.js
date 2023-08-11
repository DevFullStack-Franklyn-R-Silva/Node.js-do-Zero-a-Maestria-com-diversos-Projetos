// npm init
// npm install inquirer@8.1.0
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            name: "p1",
            message: "Qual a primeira nota?",
        },
        {
            name: "p2",
            message: "Qual a segunda nota?",
        },
    ])
    .then((answers) => {
        console.log(answers);
        const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

        console.log(`A média: ${media}`);
    })
    .catch((err) => console.error(err));
