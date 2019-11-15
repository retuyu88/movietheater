'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('theaters', [{
        id : 1,
        theater_name: 'Theater 1',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        theater_name: 'Theater 2',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,
        theater_name: 'Theater 3',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 4,
        theater_name: 'Theater 4',
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
