const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.get('/', async (req, res) => {
    try {
        const producto = await producto.find();
        res.json(producto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const producto = new producto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        categoria: req.body.categoria,
    });
    try {
        const newProducto = await producto.save();
        res.status(201).json(newProducto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
