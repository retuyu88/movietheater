'use strict';
module.exports = (sequelize, DataTypes) => {
  const seats = sequelize.define('seats', {
    seat_number: DataTypes.STRING,
    theater_id: DataTypes.INTEGER
  }, {});
  seats.associate = function(models) {
    // associations can be defined here
    seats.belongsTo(models.theaters,{
      as: 'theaterid',
      foreignKey: 'theater_id'
    })
  };
  return seats;
};