const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
    total: Number,
    status: String,
});

module.exports = mongoose.model('Pedido', orderSchema);
