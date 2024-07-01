const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: String,
    descripciom: String,
    precio: Number,
    stock: Number,
    categoria: String,
});

module.exports = mongoose.model('Producto', productSchema);
