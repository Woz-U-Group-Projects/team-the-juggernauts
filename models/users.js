module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    owner_first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email_User_Name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pets_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fav_toy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hometown: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fav_place: {
      type: DataTypes.STRING,
      allowNull: false
    },
    join_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
      tableName: 'users'
    });
};
