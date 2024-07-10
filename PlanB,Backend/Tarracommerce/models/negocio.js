const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const Negocio = sequelize.define('negocio', {
    NegocioID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.TEXT
    },
    Direccion: {
        type: DataTypes.STRING(255)
    },
    Telefono: {
        type: DataTypes.STRING(20)
    },
    CorreoElectronico: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    UsuarioID: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'UsuarioID'
        }
    }
});

Usuario.hasMany(Negocio, { foreignKey: 'UsuarioID' });
Negocio.belongsTo(Usuario, { foreignKey: 'UsuarioID' });

module.exports = Negocio;
