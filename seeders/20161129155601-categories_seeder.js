'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Gyms',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cafes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Treks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scenic Overlook',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Restaurants',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
