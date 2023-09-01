// src/routes/api.js
const express = require('express');
const router = express.Router();
const ItemController = require('../controller/itemController');

router.get('/items', ItemController.getAllItems);
router.post('/itemss', ItemController.createItem);

// Implemente outras rotas como update e delete aqui

module.exports = router;

