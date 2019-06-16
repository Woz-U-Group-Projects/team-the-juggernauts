'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    pet_id: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    post_body: DataTypes.TEXT('long'),
    img_url: DataTypes.TEXT('tiny'),
    link_url: DataTypes.TEXT('tiny')
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};