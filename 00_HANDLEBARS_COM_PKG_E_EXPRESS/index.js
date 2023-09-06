const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"));

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

app.get("/blog", (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Este artigo vai te ajudar a aprender Node.js",
            comments: 4,
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Este artigo vai te ajudar a aprender PHP",
            comments: 4,
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Este artigo vai te ajudar a aprender Python",
            comments: 4,
        },
    ];

    res.render("blog", { posts });
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

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Swagger",
            version: "1.0.0",
            description: "Documentação da API Swagger",
        },
    },
    apis: ["*.js"], // Certifique-se de que esta configuração corresponda à localização dos seus arquivos de rota.
};


const swaggerSpec = swaggerJSDoc(options);
app.use("/swagger-ui", express.static(path.join(__dirname, "node_modules/swagger-ui-dist")));
// Rota para servir a documentação Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(3001, () => {
    console.log("listening on http://localhost:" + 3001);
});
