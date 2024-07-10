const express = require('express');
const router = express.Router();
const Negocio = require('../models/negocio');

router.get('/', async (req, res) => {
    try {
        const negocios = await Negocio.findAll();
        res.json(negocios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const negocio = await Negocio.create(req.body);
        res.status(201).json(negocio);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
