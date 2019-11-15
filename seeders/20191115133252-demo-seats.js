'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('seats', [{
        id : 1,
        seat_number: 'A1',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        seat_number: 'A2',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 3,
        seat_number: 'A3',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id: 4,
        seat_number: 'A4',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 5,
        seat_number: 'A5',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 6,
        seat_number: 'B1',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 7,
        seat_number: 'B2',
        theater_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 8,
        seat_number: 'A1',
        theater_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 9,
        seat_number: 'A2',
        theater_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 10,
        seat_number: 'A3',
        theater_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 11,
        seat_number: 'A4',
        theater_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 12,
        seat_number: 'A1',
        theater_id : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 13,
        seat_number: 'A2',
        theater_id : 3,
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
