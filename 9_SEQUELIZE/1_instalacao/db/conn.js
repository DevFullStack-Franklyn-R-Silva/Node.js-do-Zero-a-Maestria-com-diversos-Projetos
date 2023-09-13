const { Sequelize } = require("sequelize");
// Nome do banco, login, senha
const sequelize = new Sequelize("nodesequelize", "root", "admin123", {
    host: "localhost",
    dialect: "mysql",
});

try {
    sequelize.authenticate();
    console.log("Conectamos com sucesso com o Sequelize!");
} catch (error) {
    console.log("Não foi possível conectar: " + error);
}

module.exports = sequelize;
