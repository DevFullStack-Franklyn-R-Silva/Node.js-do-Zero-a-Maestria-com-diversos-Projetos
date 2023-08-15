const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

// sempre acima do "/"
app.get("/", (req, res) => {
    const user = {
        name: "Franklyn",
        surname: "Roberto",
        age: 25,
    };
    const palavra = "Teste";

    const auth = false;

    const approved = false;

    res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3001, () => {
    console.log("listening on http://localhost:" + 3001);
});
