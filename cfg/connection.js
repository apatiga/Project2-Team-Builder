// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.USER,
//     process.env.DB_PASSWORD,
//    {
//      host: 'localhost',
//      dialect: 'mysql',
//      port: 3006
//    }
//  );
// }

// module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config(); // Import sensitive data from .env

console.log(process.env.DB_PASSWORD)

const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL) // JAWSDB_URL is for HEROKU
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, { // This is for Local
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306,
    });

module.exports = sequelize;