const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Tarracommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
