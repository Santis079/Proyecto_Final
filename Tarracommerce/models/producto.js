const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Negocio = require('./negocio');

const Producto = sequelize.define('producto', {
    ProductoID: {
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
    Precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    negocioID: {
        type: DataTypes.INTEGER,
        references: {
            model: negocio,
            key: 'negocioID'
        }
    },
    Estado: {
        type: DataTypes.ENUM('pendiente', 'aprobado'),
        defaultValue: 'pendiente'
    }
});

negocio.hasMany(producto, { foreignKey: 'NegocioID' });
producto.belongsTo(negocio, { foreignKey: 'NegocioID' });

module.exports = producto;
