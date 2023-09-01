// src/controllers/itemController.js
const Item = require("../model/item");

class ItemController {
    static async getAllItems(req, res) {
        try {
            const items = await Item.getAll();
            console.log(items); // Verifique os dados aqui
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async createItem(req, res) {
        try {
            const newItem = req.body;
            const result = await Item.create(newItem);
            res.json({
                message: "Item created successfully",
                id: result.insertId,
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Implemente outras ações como update e delete aqui
}

module.exports = ItemController;
