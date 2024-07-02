const express = require('express');
const router = express.Router();
const Producto = require('./productos');


router.get('/', async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
