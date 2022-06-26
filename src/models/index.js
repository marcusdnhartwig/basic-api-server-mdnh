'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const foodSchema = require('./food.js');
const clothesSchema = require('./clothes.js');
//const { Database } = require('sqlite3');

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite::memory'
//   : process.env.DATABASE_URL || 'postgres://localhost:5432/basic-api-server';

// const sequelize = new Sequelize(DATABASE_URL);

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

const DATABASE_URL = 'sqlite::memory';
const sequelize = new Sequelize(DATABASE_URL);
const FoodModel = foodSchema(sequelize, DataTypes);
const ClothesModel = clothesSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  FoodModel,
  ClothesModel,
};
