'use strict';
module.exports = (sequelize, DataTypes) => {
  const time_slots = sequelize.define('time_slots', {
    time_slot: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    theater_id: DataTypes.INTEGER
  }, {});
  time_slots.associate = function(models) {
    // associations can be defined here
  };
  return time_slots;
};