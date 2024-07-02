const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

require('./models/Usuario');
require('./models/Negocio');
require('./models/Producto');
require('./models/Pedido');
require('./models/DetallePedido');

const app = express();

app.use(bodyParser.json());


sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to create tables, shutting down...', err);
    });

const usuarioRoutes = require('./routes/usuarios');
const negocioRoutes = require('./routes/negocios');
const productoRoutes = require('./routes/productos');
const pedidoRoutes = require('./routes/pedidos');
const detallePedidoRoutes = require('./routes/detallesPedidos');

app.use('/usuarios', usuarioRoutes);
app.use('/negocios', negocioRoutes);
app.use('/productos', productoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/detallesPedidos', detallePedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
