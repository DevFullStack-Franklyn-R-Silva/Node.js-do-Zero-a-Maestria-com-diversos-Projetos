// src/db/connection.js
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "rest_with_spring_boot",
});

connection.query("SELECT 1", (err, result) => {
    if (err) {
        console.error("Error testing database connection:", err);
        return;
    }
    console.log("Database connection successful");
});
module.exports = connection;
