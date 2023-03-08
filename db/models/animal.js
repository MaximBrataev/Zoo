'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(Gallery) {
      this.hasMany(Gallery, { foreignKey: 'animalId' });
    }
  }
  Animal.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Animal',
    }
  );
  return Animal;
};
