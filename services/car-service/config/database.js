const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'carshop',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || 'root',
    {
        host: process.env.DB_HOST || 'mysql', // 'mysql' là tên service trong docker-compose
        dialect: 'mysql',
        logging: false
    }
);

module.exports = sequelize;