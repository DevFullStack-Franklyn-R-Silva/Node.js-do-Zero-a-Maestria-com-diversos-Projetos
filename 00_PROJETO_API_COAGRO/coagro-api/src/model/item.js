// src/models/item.js
const connection = require("../db/connection");

class Item {
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM person", (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Implemente outros métodos como update e delete aqui

    static create(itemData, callback) {
        connection.query("INSERT INTO items SET ?", itemData, callback);
    }

    // Implemente outros métodos como update e delete aqui
}

module.exports = Item;
