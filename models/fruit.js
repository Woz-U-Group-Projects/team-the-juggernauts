'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fruit = sequelize.define('Fruit', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Fruit.associate = function(models) {
    // associations can be defined here
  };
  return Fruit;
};