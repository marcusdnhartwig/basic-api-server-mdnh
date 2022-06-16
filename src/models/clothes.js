'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('clothes', {
    clothes: {
      type: DataTypes.ENUM,
      values: ['pants', 'shirts', 'sunskirts'],
      allowNull: true,
    },
  });
};
