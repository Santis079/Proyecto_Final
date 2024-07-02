const db = require('../config/db');

exports.getAllUsuarios = (req, res) => {
    db.query('SELECT * FROM Usuarios', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.createUsuario = (req, res) => {
    const { Nombre, CorreoElectronico, Contrasena, Direccion, Telefono, Rol } = req.body;
    db.query('INSERT INTO Usuarios (Nombre, CorreoElectronico, Contrasena, Direccion, Telefono, Rol) VALUES (?, ?, ?, ?, ?, ?)',
        [Nombre, CorreoElectronico, Contrasena, Direccion, Telefono, Rol],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: result.insertId });
        });
};
