const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    direccion: String,
});

module.exports = mongoose.model('Usuario', userSchema);
