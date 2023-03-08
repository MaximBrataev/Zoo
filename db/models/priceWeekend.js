'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class priceWeekend extends Model {
    static associate(models) {}
  }
  priceWeekend.init(
    {
      category: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'priceWeekend',
    }
  );
  return priceWeekend;
};
