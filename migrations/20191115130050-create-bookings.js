'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'seats',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      time_slot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'time_slots',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookings');
  }
};