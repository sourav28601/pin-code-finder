'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favourite.init({
    name: DataTypes.STRING,
    branch_type: DataTypes.STRING,
    delivery_status: DataTypes.STRING,
    district: DataTypes.STRING,
    region: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};