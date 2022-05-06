const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.DB_USERNAME,
  password: process.env.PASS,
  database: process.env.DATABASE,
  port: 5432,
  logging: false,
});

module.exports = { db };
