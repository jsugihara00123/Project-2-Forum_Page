const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(JAWSDB_URL?JAWSDB_URL:
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    // 3001? look at day 7/14 ORM day 3 unit 21 config folder 
    port: 3306,
  }
);
module.exports = sequelize;