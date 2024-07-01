const express = require('express');
const router = express.Router();
const User = require('../models/user');
const usuario = require('../models/usuario');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const usuario = new usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        direccion: req.body.direccion,
    });
    try {
        const newUsuario = await usuario.save();
        res.status(201).json(newUsuario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
