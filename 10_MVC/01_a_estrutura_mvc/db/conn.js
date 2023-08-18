const { Sequilize } = require('sequilize');

const sequilize = new Sequilize("nodemvc2", "root", "",{
    host: "localhost",
    dialect: "mysql"
});

try {
    sequilize.authenticate()
    console.log("Conectamos ao MySQL!")
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

exports.default = sequilize
