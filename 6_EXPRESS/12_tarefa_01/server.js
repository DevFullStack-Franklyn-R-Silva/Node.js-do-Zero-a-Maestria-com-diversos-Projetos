const express = require("express");
const app = express();
const router = express.Router();
const port = 5000;
const path = require("path");

const basePath = path.join(__dirname, "templates");


app.get("/", function (req, res){
    res.sendFile(`${basePath}/index.html`);
});

app.use( function (req, res){
    res.status(404).sendFile(`${basePath}/404.html`);
});


app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
});
