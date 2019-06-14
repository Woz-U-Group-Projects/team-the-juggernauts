'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable("Posts", {
    post_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    pet_id: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
    },
    post_body: {
      allowNull: true,
      type: Sequelize.STRING
    },
    img_url: {
      allowNull: true,
      type: Sequelize.STRING
    },
    link_url: {
      allowNull: true,
      type: Sequelize.STRING
    }
  });
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable("Posts");
  }
};
