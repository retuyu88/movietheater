'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    seat_id: DataTypes.INTEGER,
    time_slot_id: DataTypes.INTEGER
  }, {});
  bookings.associate = function(models) {
    // associations can be defined here
  };
  return bookings;
};