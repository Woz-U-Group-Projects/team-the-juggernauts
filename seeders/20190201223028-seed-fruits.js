"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("Fruits", [
      { name: "Banana" , description: "A long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe."},
      { name: "Strawberry" , description: "A sweet soft red fruit with a seed-studded surface."},
      { name: "Tomato" , description: "A glossy red, or occasionally yellow, pulpy edible fruit that is eaten as a vegetable or in salad."}
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Fruits", null, {});
  }
};
