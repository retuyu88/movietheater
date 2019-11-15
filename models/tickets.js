'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    booking_id: DataTypes.INTEGER,
    staff_id: DataTypes.INTEGER
  }, {});
  tickets.associate = function(models) {
    // associations can be defined here
  };
  return tickets;
};