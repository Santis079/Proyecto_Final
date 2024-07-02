const express = require('express');
const router = express.Router();
const Pedido = require('./Pedidos');


router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
