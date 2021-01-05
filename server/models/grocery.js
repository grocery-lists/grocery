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
    }
  };
  Grocery.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    ParentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grocery',
  });

  Grocery.addHook('beforeCreate', (grocery) => {
    grocery.status = false
  })
  
  return Grocery;
};