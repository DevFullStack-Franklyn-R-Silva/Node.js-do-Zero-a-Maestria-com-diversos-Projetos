const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn.js");

const User = require("./models/User.js");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public", { extensions: ["css"] }));

// pagina inicial
app.get("/", (req, res) => {
    res.render("home");
});

conn.sync()
    .then(() => {
        app.listen(3001);
    })
    .catch((err) => {
        console.log(err);
    });
