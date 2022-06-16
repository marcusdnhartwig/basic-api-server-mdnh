'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food.schema');
const clothesSchema = require('./clothes.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/mdnh_api_app';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// all the models could be created adn exported in THIS file!
// create Person Model
const foodModel = foodSchema(sequelize, DataTypes);
const clothesModel = clothesSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  foodModel,
  clothesModel,
};
