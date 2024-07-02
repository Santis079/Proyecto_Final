const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const usuario = require('./Usuario');

const pedido = sequelize.define('pedido', {
    PedidoID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UsuarioID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'UsuarioID'
        }
    },
    FechaPedido: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    Estado: {
        type: DataTypes.STRING(50)
    },
    Total: {
        type: DataTypes.DECIMAL(10, 2)
    }
});

usuario.hasMany(pedido, { foreignKey: 'UsuarioID' });
pedido.belongsTo(usuario, { foreignKey: 'UsuarioID' });

module.exports = pedido;
