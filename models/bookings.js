'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    seat_id: DataTypes.INTEGER,
    time_slot_id: DataTypes.INTEGER
  }, {});
  bookings.associate = function(models) {
    // associations can be defined here
    bookings.belongsTo(models.seats,{
      as: 'seatid',
      foreignKey: 'seat_id'
    }),
    bookings.belongsTo(models.time_slots,{
      as: 'timesid',
      foreignKey: 'time_slot_id'
    })
  };
  return bookings;
};