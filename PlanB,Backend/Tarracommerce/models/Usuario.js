const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    UsuarioID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    CorreoElectronico: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    Contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Direccion: {
        type: DataTypes.STRING(255)
    },
    Telefono: {
        type: DataTypes.STRING(20)
    },
    Rol: {
        type: DataTypes.ENUM('comprador', 'vendedor', 'administrador'),
        defaultValue: 'comprador'
    }
});

module.exports = Usuario;
