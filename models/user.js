'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    owner_first_name: DataTypes.TEXT,
    owner_last_name: DataTypes.TEXT,
    email: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    password: {
        allowNull: false,
        type: DataTypes.TEXT
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};