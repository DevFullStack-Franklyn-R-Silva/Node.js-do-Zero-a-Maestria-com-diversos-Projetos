const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3001, () => {
    console.log("listening on http://localhost:" + 3001);
});
