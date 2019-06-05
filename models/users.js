module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    users_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    owner_first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    owner_last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pets_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fav_toy: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    hometown: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fav_place: {
      type: DataTypes.STRING(45),
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

