const express = require("express");
const app = express();
const port = 3001; // variável de ambiente

const path = require("path");

const users = require("./users");

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// arquivos estáticos
app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

app.use("/users", users);

// Sempre acima do "/"
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

// pagina 404
app.use(function (req, res) {
    res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
});
