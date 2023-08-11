// modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//modulos internos
const fs = require("fs");

console.clear();
operation();

function operation() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "O que você deseja fazer?",
                choices: [
                    "Criar conta",
                    "Consultar Saldo",
                    "Depositar",
                    "Sacar",
                    "Sair",
                ],
            },
        ])
        .then((answer) => {
            const action = answer["action"];

            if (action === "Criar conta") {
                createAccount();
                buildAccount();
            }
        })
        .catch((err) => console.log(err));
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir: "));
}

//
function buildAccount() {
    inquirer
        .prompt([
            {
                name: "accountName",
                message: "Digite um nome para a sua conta: ",
            },
        ])
        .then((answer) => {
            const accountName = answer["accountName"];

            console.info(accountName);

            if (!fs.existsSync("accounts")) {
                fs.mkdirSync("accounts");
            }
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.black(
                        "Essa conta já existe, escolha outro nome!"
                    )
                );
                buildAccount();
                return;
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`,
                '{"balance": 0}',
                function (err) {
                    console.log(err);
                }
            );
            console.log(chalk.green("Parabéns sua conta foi criada!"))
            operation();
        })
        .catch((err) => console.log(err));
}
