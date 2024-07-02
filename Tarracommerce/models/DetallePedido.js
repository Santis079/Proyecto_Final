const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');
const Producto = require('./Producto');

const DetallePedido = sequelize.define('DetallePedido', {
    DetalleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    PedidoID: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'PedidoID'
        }
    },
    ProductoID: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'ProductoID'
        }
    },
    Cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PrecioUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

Pedido.hasMany(DetallePedido, { foreignKey: 'PedidoID' });
DetallePedido.belongsTo(Pedido, { foreignKey: 'PedidoID' });

Producto.hasMany(DetallePedido, { foreignKey: 'ProductoID' });
DetallePedido.belongsTo(Producto, { foreignKey: 'ProductoID' });

module.exports = DetallePedido;
