const express = require('express');
const router = express.Router();
const pedido = require('../models/pedido');

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('usuario').populate('producto');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const pedido = new pedido({
        usuario: req.body.usuario,
        producto: req.body.producto,
        total: req.body.total,
        estado: req.body.estado,
    });
    try {
        const newPedido = await pedido.save();
        res.status(201).json(newPedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
