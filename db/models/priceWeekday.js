'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class priceWeekday extends Model {
    static associate(models) {}
  }
  priceWeekday.init(
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
      modelName: 'priceWeekday',
    }
  );
  return priceWeekday;
};
