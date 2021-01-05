'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grocery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grocery.belongsTo(models.Parent)
      Grocery.belongsTo(models.Child)
    }
  };
  Grocery.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    childId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grocery',
  });
  
  return Grocery;
};