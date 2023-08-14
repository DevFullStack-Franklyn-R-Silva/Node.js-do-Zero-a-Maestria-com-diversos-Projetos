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
            } else if (action === "Depositar") {
                deposit();
            } else if (action === "Consultar Saldo") {
                getAccountBalance();
            } else if (action === "Sacar") {
                withdraw();
            } else if (action === "Sair") {
                console.log(
                    chalk.bgBlue.black("Obrigado por usar o Accounts!")
                );
                process.exit();
            } else {
                console.log("Error!");
            }
        })
        .catch((err) => console.log(err));
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir: "));

    buildAccount();
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
            console.log(chalk.green("Parabéns sua conta foi criada!"));
            operation();
        })
        .catch((err) => console.log(err));
}

// add an amount to user account
function deposit() {
    inquirer
        .prompt([
            {
                name: "accountName",
                message: "Qual o nome da sua conta?",
            },
        ])
        .then((answer) => {
            const accountName = answer["accountName"];

            // verify if account exists
            if (!checkAccount(accountName)) {
                return deposit();
            }

            inquirer
                .prompt([
                    {
                        name: "amount",
                        message: "Quanto você deseja depositar?",
                    },
                ])
                .then((answer) => {
                    const amount = answer["amount"];

                    // add an amount
                    addAmount(accountName, amount);
                    operation();
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => {
            console.log(err);
        });
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
            chalk.bgRed.black("Esta conta não existe, escolha outro nome!")
        );
        return false;
    }
    return true;
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(
            chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!")
        );
        return deposit();
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err);
        }
    );
    console.log(
        chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`)
    );
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: "utf8",
        flag: "r",
    });
    return JSON.parse(accountJSON);
}

// shown account balance
function getAccountBalance() {
    inquirer
        .prompt([
            {
                name: "accountName",
                message: "Qual o nome da sua conta?",
            },
        ])
        .then((answer) => {
            const accountName = answer["accountName"];

            // verify if account exists
            if (!checkAccount(accountName)) {
                return getAccountBalance();
            }
            const accountData = getAccount(accountName);

            console.log(
                chalk.bgBlue.black(
                    `Olá, o saldo da sua conta é R$${accountData.balance}`
                )
            );
            operation();
        })
        .catch((err) => console.log(err));
}

// withdraw an amount from user account
function withdraw() {
    inquirer
        .prompt([
            {
                name: "accountName",
                message: "Qual o nome da sua conta?",
            },
        ])
        .then((answer) => {
            const accountName = answer["accountName"];

            if (!checkAccount(accountName)) {
                return withdraw();
            }
            inquirer
                .prompt([
                    {
                        name: "amount",
                        message: "Quanto você deseja sacar?",
                    },
                ])
                .then((answer) => {
                    const amount = answer["amount"];

                    console.log(amount);
                }).catch;
        })
        .catch((err) => console.log(err));
}
