const express = require("express");
const app = express();
const port = 3001; // variável de ambiente

const path = require("path");

const basePath = path.join(__dirname, "templates");

// ======================  Middlewares  =================================
const checkAuth = function (req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log("Está logado, pode continua.");
        next();
    } else {
        console.log("Não está logado, faça o login para continuar.");
        next();
    }
};

app.use(checkAuth);
// =================================================================

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
});
