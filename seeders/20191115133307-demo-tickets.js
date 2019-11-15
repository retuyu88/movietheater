'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tickets', [{
        booking_id: 1,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        booking_id: 2,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 3,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 4,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 5,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 6,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 7,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 8,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 9,
        staff_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        booking_id: 10,
        staff_id: 1,
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
