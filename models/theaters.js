'use strict';
module.exports = (sequelize, DataTypes) => {
  const theaters = sequelize.define('theaters', {
    theater_name: DataTypes.STRING
  }, {});
  theaters.associate = function(models) {
    // associations can be defined here
  };
  return theaters;
};