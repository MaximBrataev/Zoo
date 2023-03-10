'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    static associate({ Animal }) {
      this.belongsTo(Animal, { foreignKey: 'animalId' });
    }
  }
  Gallery.init(
    {
      animalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Animals',
          key: 'id',
        },
      },
      photo: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Gallery',
    }
  );
  return Gallery;
};
