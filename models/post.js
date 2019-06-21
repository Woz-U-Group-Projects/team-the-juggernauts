module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    pet_id: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    post_body: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    link_url: DataTypes.TEXT
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};