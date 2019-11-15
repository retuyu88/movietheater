'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('time_availables', [{
        id : 1,
        time : '08.00 - 10.00',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        time : '10.30 - 12.00',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,
        time : '12.30 - 14.00',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 4,
        time : '14.30 - 16.00',
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
