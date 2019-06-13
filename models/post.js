'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    post_id: DataTypes.INTEGER.UNSIGNED,
    pet_id: DataTypes.INTEGER.UNSIGNED,
    post_body: DataTypes.STRING,
    img_url: DataTypes.STRING,
    link_url: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};