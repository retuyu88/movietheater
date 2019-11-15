'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('time_slots', [{
        time_id: 1,
        movie_id: 1,
        theater_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        time_id: 2,
        movie_id: 2,
        theater_id: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        time_id: 3,
        movie_id: 3,
        theater_id: 2,
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
