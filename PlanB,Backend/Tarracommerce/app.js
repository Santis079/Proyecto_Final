const sequelize = require('./config/database');
const Usuario = require('./models/Usuario');
const Negocio = require('./models/negocio');
const Producto = require('./models/Producto');
const Pedido = require('./models/Pedido');
const DetallePedido = require('./models/DetallePedido');

sequelize.sync({ force: false })
    .then(() => {
        console.log('BBDD y Tablas creadas');
    })
    .catch(err => {
        console.error('Sin posibilidad de creación, shutting down...', err);
    });
