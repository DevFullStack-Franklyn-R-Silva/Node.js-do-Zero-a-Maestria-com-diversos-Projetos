const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    const items = ["Item a", "Item b", "Item c"];

    res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4,
    };

    res.render("blogpost", { post });
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
