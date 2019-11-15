'use strict';
module.exports = (sequelize, DataTypes) => {
  const staffs = sequelize.define('staffs', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  staffs.associate = function(models) {
    // associations can be defined here
  };
  return staffs;
};