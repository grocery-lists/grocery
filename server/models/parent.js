'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/hashPassword');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Parent.hasOne(models.Families)
      Parent.hasMany(models.Child)
      Parent.hasMany(models.Grocery)
    }
  };
  Parent.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parent',
  });
  Parent.addHook('beforeCreate', parent => {
    parent.password = hashPassword(parent.password)
    console.log(hashPassword(parent.password))
  })
  return Parent;
};