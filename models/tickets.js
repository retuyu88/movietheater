'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    booking_id: DataTypes.INTEGER,
    staff_id: DataTypes.INTEGER
  }, {});
  tickets.associate = function(models) {
    // associations can be defined here
    tickets.belongsTo(models.bookings,{
      as: 'bookingid',
      foreignKey: 'booking_id'
    })
    tickets.belongsTo(models.staffs,{
      as: 'staffid',
      foreignKey: 'staff_id'
    })
  };
  return tickets;
};