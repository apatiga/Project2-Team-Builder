// config/connection.js

const Sequelize = require('sequelize');
require('dotenv').config();

// Create a new Sequelize instance and configure the database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.DB_PASSWORD,
 // 'your-database-name', 'your-username', 'your-password',
 {
  host: 'localhost',
  dialect: 'mysql',
  port: 3001,
});

module.exports = sequelize;