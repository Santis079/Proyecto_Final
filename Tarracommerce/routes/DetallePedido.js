const express = require('express');
const router = express.Router();
const DetallePedido = require('../models/DetallePedido');

router.get('/', async (req, res) => {
    try {
        const detalles = await DetallePedido.findAll();
        res.json(detalles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const detalle = await DetallePedido.create(req.body);
        res.status(201).json(detalle);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
