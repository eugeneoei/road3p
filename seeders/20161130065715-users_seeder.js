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
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'david@email.com',
        lastName: 'David',
        email: 'Tan',
        password: '$2a$10$wKLx2DiZe0CXglylMA5Nfej49w4Ys2zARNUSDSENXMud/9isbovSC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'jon@email.com',
        lastName: 'Jon',
        email: 'Doe',
        password: '$2a$10$Eow/JZ20Uo6Ye4VK.8U71OLPorLvp6iMtKjQDdnqypn/1ypmhMgtG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'peter@email.com',
        lastName: 'Peter',
        email: 'Lee',
        password: '$2a$10$ftDTztv4/5pAgHlHMMFqXOz.PvwXoe5ZU1PGN9tgJBZlnNLl7F.tq',
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
    return queryInterface.bulkDelete('users', null, {});
  }
};
