const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("nodemvc", "root", "admin123",{
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate()
    console.log("Conectamos ao MySQL!")
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

exports.default = sequelize
