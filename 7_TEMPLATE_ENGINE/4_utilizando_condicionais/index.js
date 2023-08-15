const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
})

// sempre acima do "/"
app.get("/", (req, res) => {
    const user = {
        name: "Franklyn",
        surname: "Roberto",
        age: 25,
    };
    const palavra = "Teste";

    // true ou false, para exibir a pagina
    const auth = false;

    res.render("home", { user: user, palavra, auth });
});

app.listen(3001, () => {
    console.log("listening on http://localhost:" + 3001);
});
