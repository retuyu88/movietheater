'use strict';
module.exports = (sequelize, DataTypes) => {
  const time_availables = sequelize.define('time_availables', {
    time: DataTypes.STRING
  }, {});
  time_availables.associate = function(models) {
    // associations can be defined here
  };
  return time_availables;
};