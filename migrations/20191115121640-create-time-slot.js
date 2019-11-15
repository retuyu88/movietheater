'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('time_slots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'time_availables',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'movies',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      theater_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'theaters',
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
    return queryInterface.dropTable('time_slots');
  }
};