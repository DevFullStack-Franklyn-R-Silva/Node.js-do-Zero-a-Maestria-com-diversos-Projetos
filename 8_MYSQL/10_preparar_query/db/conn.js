const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10, //A propriedade connectionLimit no código que você forneceu define o número máximo de conexões simultâneas que o pool de conexões MySQL pode ter com o banco de dados. Nesse caso, o valor está definido como 10, o que significa que o pool de conexões permitirá até 10 conexões simultâneas com o banco de dados MySQL.
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "nodemysql",
});

module.exports = pool;
