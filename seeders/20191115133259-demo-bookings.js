'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('bookings', [{
        id : 1,
        seat_id: 1,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 2,
        seat_id: 2,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 3,
        seat_id: 3,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 4,
        seat_id: 4,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 5,
        seat_id: 5,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 6,
        seat_id: 6,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 7,
        seat_id: 7,
        time_slot_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 8,
        seat_id: 1,
        time_slot_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 9,
        seat_id: 2,
        time_slot_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        id : 10,
        seat_id: 3,
        time_slot_id: 2,
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
