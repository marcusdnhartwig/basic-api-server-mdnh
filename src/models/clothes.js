'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('clothes', {
    clothesType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clothesMake: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clothesModel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
