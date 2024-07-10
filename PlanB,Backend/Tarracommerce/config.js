const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Tarracommerce', 'root', '', {
    host: 'https://console.firebase.google.com/project/tarracomerce/database/tarracomerce-default-rtdb/data/~2F',
    dialect: 'Mysql'
});

module.exports = sequelize;
